import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ResendVerificationDto {
    @ApiProperty({
        example: 'hasan@example.com',
    })
    @IsEmail()
    email: string;
}