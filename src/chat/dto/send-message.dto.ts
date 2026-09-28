import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class SendMessageDto {
  @ApiProperty({
    example: 'Explain dependency injection in NestJS',
  })
  @IsString()
  @MinLength(1)
  message: string;

  @ApiPropertyOptional({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description:
      'Existing conversation ID. Leave empty to create a new conversation.',
  })
  @IsOptional()
  @IsUUID()
  conversationId?: string;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440001',
    description: 'Provider model ID to use for generating the response.',
  })
  @IsUUID()
  providerModelId: string;
}