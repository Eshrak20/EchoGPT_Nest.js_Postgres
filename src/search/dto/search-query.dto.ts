import {
    IsInt,
    IsOptional,
    IsString,
    Max,
    Min,
    MinLength,
} from 'class-validator';

import {
    ApiProperty,
    ApiPropertyOptional,
} from '@nestjs/swagger';

export class SearchQueryDto {
    @ApiProperty({
        example: 'NestJS dependency injection',
        description: 'The search query',
    })
    @IsString()
    @MinLength(1)
    q: string;

    @ApiPropertyOptional({
        example: 5,
        default: 5,
        description: 'Number of results to return',
    })
    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(10)
    limit?: number;
}