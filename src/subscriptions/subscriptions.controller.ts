import {
    Body,
    Controller,
    Get,
    Post,
    UseGuards,
} from '@nestjs/common';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { SubscriptionsService } from './subscriptions.service.js';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';

import { DowngradeSubscriptionDto } from './dto/downgrade-subscription.dto.js';
import { UpgradeSubscriptionDto } from './dto/upgrade-subscription.dto.js';

import { Req } from '@nestjs/common';
import { Request } from 'express';

interface AuthenticatedRequest extends Request {
  user: {
    id: string;
  };
}

@ApiTags('Subscriptions')
@Controller('subscriptions')
export class SubscriptionsController {
  constructor(
    private readonly subscriptionsService: SubscriptionsService,
  ) {}

  // --------------------------------------------------
  // GET /api/subscriptions/plans
  // --------------------------------------------------

  @Get('plans')
  @ApiOperation({
    summary: 'Get available subscription plans',
  })
  @ApiResponse({
    status: 200,
    description: 'Available subscription plans',
  })
  getPlans() {
    return this.subscriptionsService.getPlans();
  }

  // --------------------------------------------------
  // GET /api/subscriptions/me
  // --------------------------------------------------

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Get current subscription',
  })
  getCurrentSubscription(
    @Req() req: AuthenticatedRequest,
  ) {
    return this.subscriptionsService.getCurrentSubscription(
      req.user.id,
    );
  }

  // --------------------------------------------------
  // POST /api/subscriptions/upgrade
  // --------------------------------------------------

  @Post('upgrade')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Upgrade subscription',
  })
  @ApiResponse({
    status: 200,
    description: 'Subscription upgraded successfully',
  })
  async upgrade(
    @Req() req: AuthenticatedRequest,
    @Body() dto: UpgradeSubscriptionDto,
  ) {
    return this.subscriptionsService.upgrade(
      req.user.id,
      dto.plan,
    );
  }

  // --------------------------------------------------
  // POST /api/subscriptions/downgrade
  // --------------------------------------------------

  @Post('downgrade')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Downgrade subscription',
  })
  @ApiResponse({
    status: 200,
    description: 'Subscription downgraded successfully',
  })
  async downgrade(
    @Req() req: AuthenticatedRequest,
    @Body() dto: DowngradeSubscriptionDto,
  ) {
    return this.subscriptionsService.downgrade(
      req.user.id,
      dto.plan,
    );
  }

  // --------------------------------------------------
  // GET /api/subscriptions/status
  // --------------------------------------------------

  @Get('status')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Get subscription status and usage',
  })
  getStatus(
    @Req() req: AuthenticatedRequest,
  ) {
    return this.subscriptionsService.getStatus(
      req.user.id,
    );
  }

  // --------------------------------------------------
  // GET /api/subscriptions/usage
  // --------------------------------------------------

  @Get('usage')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Get remaining AI requests',
  })
  getRemainingRequests(
    @Req() req: AuthenticatedRequest,
  ) {
    return this.subscriptionsService.getRemainingRequests(
      req.user.id,
    );
  }
}