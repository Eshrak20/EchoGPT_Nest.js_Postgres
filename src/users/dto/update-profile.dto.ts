import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateProfileDto {
  @ApiProperty({
    example: 'Eshrak Hasan',
    description: 'Updated user name',
    minLength: 2,
    maxLength: 100,
    required: false,
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name?: string;
}