import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';

import {
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

import { ProviderType } from '../../generated/prisma/client.js';

export class CreateProviderDto {
  @ApiProperty({
    example: 'OpenAI',
  })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({
    enum: ProviderType,
    example: ProviderType.OPENAI,
  })
  @IsEnum(ProviderType)
  type: ProviderType;

  @ApiPropertyOptional({
    example: 'https://api.openai.com/v1',
  })
  @IsOptional()
  @IsString()
  apiBaseUrl?: string;

  @ApiPropertyOptional({
    example: 'sk-example-secret-key',
    description: 'Provider API key',
  })
  @IsOptional()
  @IsString()
  @MinLength(10)
  apiKey?: string;
}