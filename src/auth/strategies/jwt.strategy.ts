import {
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

import { PassportStrategy } from '@nestjs/passport';

import {
    ExtractJwt,
    Strategy,
} from 'passport-jwt';

import { UsersService } from '../../users/users.service.js';

import { PrismaService } from '../../prisma/prisma.service.js';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        configService: ConfigService,

        private readonly usersService: UsersService,

        private readonly prisma: PrismaService,
    ) {
        super({
            jwtFromRequest:
                ExtractJwt.fromAuthHeaderAsBearerToken(),

            ignoreExpiration: false,

            secretOrKey:
                configService.getOrThrow<string>(
                    'JWT_ACCESS_SECRET',
                ),
        });
    }


    async validate(payload: {
        sub: string;
        email: string;
        sessionId: string;
    }) {

        // 1. Check session
        const session =
            await this.prisma.session.findUnique({
                where: {
                    id: payload.sessionId,
                },
            });


        // 2. Session doesn't exist
        if (!session) {
            throw new UnauthorizedException(
                'Session not found',
            );
        }


        // 3. Session was revoked
        if (session.revokedAt) {
            throw new UnauthorizedException(
                'Session has been revoked',
            );
        }


        // 4. Session has expired
        if (session.expiresAt < new Date()) {
            throw new UnauthorizedException(
                'Session has expired',
            );
        }


        // 5. Check user
        const user =
            await this.usersService.findById(
                payload.sub,
            );


        if (!user || !user.isActive) {
            throw new UnauthorizedException(
                'User is not authorized',
            );
        }


        // 6. Return authenticated user
        return {
            id: user.id,
            role: user.role.name,
        };
    }
}