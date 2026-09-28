import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({
    example: 'Password123',
    description: 'Current account password',
  })
  @IsString()
  currentPassword!: string;

  @ApiProperty({
    example: 'NewPassword123',
    description: 'New password (minimum 8 characters)',
    minLength: 8,
    maxLength: 72,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  newPassword!: string;
}