import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { createHash, randomBytes, randomUUID } from 'crypto';
import { PrismaService } from '../prisma/prisma.service.js';
import { UsersService } from '../users/users.service.js';
import { LoginDto } from './dto/login.dto.js';
import { RegisterDto } from './dto/register.dto.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }

  async register(dto: RegisterDto) {

    const passwordHash = await argon2.hash(dto.password, {
      type: argon2.argon2id,
    });

    const user = await this.usersService.createUser({
      name: dto.name,
      email: dto.email.toLowerCase(),
      passwordHash,
    });
    const verificationUrl =
      await this.createEmailVerificationUrl(user.id);
    console.log('Email verification URL:');
    console.log(verificationUrl);
    return {
      message: 'Registration successful. Please check your console for the email verification link.',
      user: this.sanitizeUser(user),
    };
  }

  async login(
    dto: LoginDto,
    userAgent?: string,
    ipAddress?: string,
  ) {
    // 1. Find user
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException(
        'Email Not Found',
      );
    }
    // 2. Check password
    const passwordMatches = await argon2.verify(
      user.passwordHash,
      dto.password,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    // 3. Create a unique session ID
    const sessionId = randomUUID();

    // 4. Generate access + refresh tokens
    const tokens = await this.generateTokens(
      user.id,
      user.email,
      sessionId,
    );

    // 5. Hash refresh token before storing it
    const refreshTokenHash = this.hashToken(
      tokens.refreshToken,
    );

    // 6. Calculate refresh-token/session expiry
    const expiresInDays = Number(
      this.configService.get<string>(
        'REFRESH_TOKEN_EXPIRES_DAYS',
        '30',
      ),
    );

    const expiresAt = new Date();

    expiresAt.setDate(
      expiresAt.getDate() + expiresInDays,
    );

    // 7. Store session
    await this.prisma.session.create({
      data: {
        id: sessionId,
        userId: user.id,
        refreshTokenHash,

        expiresAt,

        // Keep your existing session information
        userAgent,
        ipAddress,
        lastUsedAt: new Date(),
      },
    });

    // 8. Return tokens + safe user data
    return {
      ...tokens,
      user: this.sanitizeUser(user),
    };
  }

  async refresh(refreshToken: string) {
    const refreshTokenHash = this.hashToken(refreshToken);

    const session = await this.prisma.session.findUnique({
      where: {
        refreshTokenHash,
      },
      include: {
        user: true,
      },
    });

    if (!session) {
      throw new UnauthorizedException(
        'Invalid refresh token',
      );
    }

    if (session.revokedAt) {
      throw new UnauthorizedException(
        'Refresh token has been revoked',
      );
    }

    if (session.expiresAt < new Date()) {
      throw new UnauthorizedException(
        'Refresh token has expired',
      );
    }

    // Generate new tokens using the SAME session ID
    const tokens = await this.generateTokens(
      session.user.id,
      session.user.email,
      session.id,
    );

    // Hash the new refresh token
    const newRefreshTokenHash = this.hashToken(
      tokens.refreshToken,
    );

    const expiresInDays = Number(
      this.configService.get<string>(
        'REFRESH_TOKEN_EXPIRES_DAYS',
        '30',
      ),
    );

    const expiresAt = new Date();

    expiresAt.setDate(
      expiresAt.getDate() + expiresInDays,
    );

    // Rotate the refresh token
    await this.prisma.session.update({
      where: {
        id: session.id,
      },
      data: {
        refreshTokenHash: newRefreshTokenHash,
        expiresAt,
        lastUsedAt: new Date(),
      },
    });

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }
  async logout(refreshToken: string) {
    const refreshTokenHash = this.hashToken(refreshToken);

    const result = await this.prisma.session.updateMany({
      where: {
        refreshTokenHash,
        revokedAt: null,
      },
      data: {
        revokedAt: new Date(),
      },
    });

    if (result.count === 0) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    return {
      message: 'Logout successful',
    };
  }

  async logoutAll(userId: string) {
    await this.prisma.session.updateMany({
      where: {
        userId,
        revokedAt: null,
      },
      data: {
        revokedAt: new Date(),
      },
    });

    return {
      message: 'Logged out from all devices',
    };
  }

  async getMe(userId: string) {
    const user = await this.usersService.getUserOrThrow(userId);

    return {
      user: this.sanitizeUser(user),
    };
  }
  async verifyEmail(token: string) {
    const tokenHash = createHash('sha256')
      .update(token)
      .digest('hex');

    const verificationToken =
      await this.prisma.emailVerificationToken.findUnique({
        where: {
          tokenHash,
        },
      });

    if (!verificationToken) {
      throw new BadRequestException(
        'Invalid verification token',
      );
    }

    if (verificationToken.usedAt) {
      throw new BadRequestException(
        'Verification token has already been used',
      );
    }

    if (verificationToken.expiresAt < new Date()) {
      throw new BadRequestException(
        'Verification token has expired',
      );
    }

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: {
          id: verificationToken.userId,
        },
        data: {
          emailVerified: true,
          emailVerifiedAt: new Date(),
        },
      }),

      this.prisma.emailVerificationToken.update({
        where: {
          id: verificationToken.id,
        },
        data: {
          usedAt: new Date(),
        },
      }),
    ]);

    return {
      message: 'Email verified successfully',
    };
  }




  private async generateTokens(
    userId: string,
    email: string,
    sessionId: string,
  ) {
    const payload = {
      sub: userId,
      sessionId,
      email,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    const refreshToken = randomBytes(48).toString('hex');

    return {
      accessToken,
      refreshToken,
    };
  }

  private hashToken(token: string) {
    return createHash('sha256')
      .update(token)
      .digest('hex');
  }

  private sanitizeUser(user: any) {
    const {
      passwordHash,
      ...safeUser
    } = user;

    return safeUser;
  }
  private async createEmailVerificationUrl(
    userId: string,
  ): Promise<string> {
    // Generate a random token
    const token = randomBytes(32).toString('hex');

    // Hash the token before storing it
    const tokenHash = createHash('sha256')
      .update(token)
      .digest('hex');

    // Token expires after 24 hours
    const expiresAt = new Date(
      Date.now() + 24 * 60 * 60 * 1000,
    );

    // Save the hashed token
    await this.prisma.emailVerificationToken.create({
      data: {
        userId,
        tokenHash,
        expiresAt,
      },
    });

    // Frontend URL can later come from .env
    const verificationUrl =
      `${process.env.APP_URL ?? 'http://localhost:3000'}` +
      `/api/auth/verify-email?token=${token}`;

    return verificationUrl;

  }
  async resendVerification(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Don't reveal whether the email exists.
    if (!user) {
      return {
        message:
          'If the account Does not exists',
      };
    }

    if (user.emailVerified) {
      return {
        message: 'Already Verified.',
      };
    }

    // Invalidate old verification tokens
    await this.prisma.emailVerificationToken.updateMany({
      where: {
        userId: user.id,
        usedAt: null,
      },
      data: {
        usedAt: new Date(),
      },
    });

    const verificationUrl =
      await this.createEmailVerificationUrl(user.id);

    // Development only
    console.log('New email verification URL:');
    console.log(verificationUrl);

    return {
      message:
        'If the account exists and is not verified, a verification email has been sent.',
    };
  }

}