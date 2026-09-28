import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsBoolean,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';

export class CreateProviderModelDto {
  @ApiProperty({
    example: 'GPT-4o',
    description: 'Display name of the AI model',
  })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({
    example: 'gpt-4o',
    description: 'Exact model identifier used by the provider API',
  })
  @IsString()
  @MinLength(2)
  modelId: string;

  @ApiPropertyOptional({
    example: true,
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}