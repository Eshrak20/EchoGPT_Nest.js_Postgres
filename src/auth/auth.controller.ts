import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';
import type { Request } from 'express';
import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
import { RefreshTokenDto } from './dto/refresh-token.dto.js';
import { RegisterDto } from './dto/register.dto.js';
import { ResendVerificationDto } from './dto/resend-verification.dto.js';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'Registration successful' })
  @ApiResponse({ status: 400, description: 'Invalid request data' })
  @ApiResponse({ status: 409, description: 'Email already registered' })
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login and generate access and refresh tokens' })
  @ApiResponse({ status: 201, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  login(
    @Body() dto: LoginDto,
    @Headers('user-agent') userAgent: string,
    @Ip() ipAddress: string,
  ) {
    return this.authService.login(dto, userAgent, ipAddress);
  }

  @Post('refresh')
  refresh(@Body() dto: RefreshTokenDto) {
    return this.authService.refresh(
      dto.refreshToken,
    );
  }
  @ApiResponse({
    status: 401,
    description: 'Invalid, expired, or revoked refresh token',
  })
  @Post('logout')
  logout(@Body() dto: RefreshTokenDto) {
    return this.authService.logout(
      dto.refreshToken,
    );
  }

  @Post('logout-all')
  @UseGuards(JwtAuthGuard)
  logoutAll(@Req() request: Request) {
    const user = request.user as any;

    return this.authService.logoutAll(user.id);
  }
  @ApiResponse({
    status: 401,
    description: 'Missing or invalid access token',
  })

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@Req() request: Request) {
    const user = request.user as any;

    return this.authService.getMe(user.id);
  }
  @Get('verify-email')
  async verifyEmail(
    @Query('token') token: string,
  ) {
    return this.authService.verifyEmail(token);
  }
  @Post('resend-verification')
  async resendVerification(
    @Body() dto: ResendVerificationDto,
  ) {
    return this.authService.resendVerification(
      dto.email,
    );
  }
}