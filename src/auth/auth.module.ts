import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import type { SignOptions } from 'jsonwebtoken';
import { UsersModule } from '../users/users.module.js';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { JwtStrategy } from './strategies/jwt.strategy.js';


@Module({
  imports: [
    ConfigModule,

    PassportModule,

    JwtModule.registerAsync({
      imports: [ConfigModule],

      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>(
          'JWT_ACCESS_SECRET',
        ),

        signOptions: {
          expiresIn: configService.getOrThrow<string>(
            'JWT_ACCESS_EXPIRES_IN',
            '15m',
          ) as SignOptions['expiresIn'],
        },
      }),
    }),

    UsersModule,
  ],

  controllers: [AuthController],

  providers: [
    AuthService,
    JwtStrategy,
  ],

  exports: [AuthService],
})
export class AuthModule { }