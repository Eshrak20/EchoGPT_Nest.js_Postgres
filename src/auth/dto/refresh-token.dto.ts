import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({
    example: 'YOUR_REFRESH_TOKEN',
    description: 'Refresh token returned during login',
  })
  @IsString()
  @MinLength(20)
  refreshToken: string;
}