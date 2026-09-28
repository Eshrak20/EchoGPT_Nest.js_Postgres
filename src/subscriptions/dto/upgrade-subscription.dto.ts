import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { SubscriptionPlan } from '../../generated/prisma/client.js';

export class UpgradeSubscriptionDto {
  @ApiProperty({
    enum: [SubscriptionPlan.PREMIUM],
    example: SubscriptionPlan.PREMIUM,
  })
  @IsEnum(SubscriptionPlan)
  plan: SubscriptionPlan;
}