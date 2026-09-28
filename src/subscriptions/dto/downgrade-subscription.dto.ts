import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { SubscriptionPlan } from '../../generated/prisma/client.js';

export class DowngradeSubscriptionDto {
  @ApiProperty({
    enum: [SubscriptionPlan.FREE],
    example: SubscriptionPlan.FREE,
  })
  @IsEnum(SubscriptionPlan)
  plan: SubscriptionPlan;
}