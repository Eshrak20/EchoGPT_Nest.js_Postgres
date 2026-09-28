import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'Eshrak G',
    description: 'Full name of the user',
    minLength: 2,
  })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({
    example: 'eshrak@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Password123',
    minLength: 8,
  })
  @IsString()
  @MinLength(8)
  password: string;
}