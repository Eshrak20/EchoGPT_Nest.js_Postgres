import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { UserRole } from '../../generated/prisma/index.js';

export class UpdateRoleDto {
  @ApiProperty({
    enum: UserRole,
    example: UserRole.ADMIN,
  })
  @IsEnum(UserRole)
  role: UserRole;
}