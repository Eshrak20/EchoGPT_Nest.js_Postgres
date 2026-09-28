import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';
import { UserRole } from '../generated/prisma/index.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  // Find a user by email for authentication
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { role: true },
    });
  }

  // Find a user by ID
  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { role: true },
    });
  }

  // Create a user during registration
  async createUser(data: {
    name: string;
    email: string;
    passwordHash: string;
  }) {
    const existingUser = await this.findByEmail(data.email);

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    const role = await this.findOrCreateDefaultRole();

    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash: data.passwordHash,
        roleId: role.id,
      },
      include: { role: true },
    });
  }

  // Create or find the default USER role
  private async findOrCreateDefaultRole() {
    return this.prisma.role.upsert({
      where: { name: UserRole.USER },
      update: {},
      create: { name: UserRole.USER },
    });
  }

  // Get authenticated user's profile
  async getProfile(userId: string) {
    const user = await this.getUserOrThrow(userId);

    return {
      user: this.sanitizeUser(user),
    };
  }

  // Update authenticated user's profile
  async updateProfile(
    userId: string,
    data: { name?: string },
  ) {
    await this.getUserOrThrow(userId);

    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        ...(data.name !== undefined && { name: data.name }),
      },
      include: { role: true },
    });

    return {
      message: 'Profile updated successfully',
      user: this.sanitizeUser(user),
    };
  }

  // Change authenticated user's password
  async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string,
  ) {
    const user = await this.getUserOrThrow(userId);

    const passwordMatches = await argon2.verify(
      user.passwordHash,
      currentPassword,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    if (currentPassword === newPassword) {
      throw new ConflictException(
        'New password must be different from current password',
      );
    }

    const passwordHash = await argon2.hash(newPassword, {
      type: argon2.argon2id,
    });

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: userId },
        data: { passwordHash },
      }),
      this.prisma.session.updateMany({
        where: {
          userId,
          revokedAt: null,
        },
        data: { revokedAt: new Date() },
      }),
    ]);

    return {
      message: 'Password changed successfully. Please login again.',
    };
  }

  // Delete authenticated user's account
  async deleteAccount(
    userId: string,
    currentPassword: string,
  ) {
    const user = await this.getUserOrThrow(userId);

    const passwordMatches = await argon2.verify(
      user.passwordHash,
      currentPassword,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    await this.prisma.user.delete({
      where: { id: userId },
    });

    return {
      message: 'Account deleted successfully',
    };
  }

  // Admin: list users with pagination
  async getAllUsers(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [users, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: { role: true },
      }),
      this.prisma.user.count(),
    ]);

    return {
      data: users.map((user) => this.sanitizeUser(user)),
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // Admin: get a user by ID
  async getUserById(id: string) {
    const user = await this.getUserOrThrow(id);

    return {
      user: this.sanitizeUser(user),
    };
  }

  // Admin: update a user's role
  async updateUserRole(
    targetUserId: string,
    roleName: UserRole,
    adminId: string,
  ) {
    if (targetUserId === adminId) {
      throw new ForbiddenException(
        'You cannot change your own role',
      );
    }

    const targetUser = await this.getUserOrThrow(targetUserId);

    const role = await this.prisma.role.upsert({
      where: { name: roleName },
      update: {},
      create: { name: roleName },
    });

    const updatedUser = await this.prisma.user.update({
      where: { id: targetUser.id },
      data: { roleId: role.id },
      include: { role: true },
    });

    return {
      message: 'User role updated successfully',
      user: this.sanitizeUser(updatedUser),
    };
  }

  // Admin: activate or deactivate a user
  async updateUserStatus(
    targetUserId: string,
    isActive: boolean,
    adminId: string,
  ) {
    if (targetUserId === adminId && !isActive) {
      throw new ForbiddenException(
        'You cannot deactivate your own account',
      );
    }

    await this.getUserOrThrow(targetUserId);

    const updatedUser = await this.prisma.user.update({
      where: { id: targetUserId },
      data: { isActive },
      include: { role: true },
    });

    // Revoke sessions when account is deactivated
    if (!isActive) {
      await this.prisma.session.updateMany({
        where: {
          userId: targetUserId,
          revokedAt: null,
        },
        data: { revokedAt: new Date() },
      });
    }

    return {
      message: isActive
        ? 'User account activated successfully'
        : 'User account deactivated successfully',
      user: this.sanitizeUser(updatedUser),
    };
  }

  // Shared helper
  async getUserOrThrow(id: string) {
    const user = await this.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  // Never return the password hash
  private sanitizeUser(user: any) {
    const { passwordHash, ...safeUser } = user;
    return safeUser;
  }
}