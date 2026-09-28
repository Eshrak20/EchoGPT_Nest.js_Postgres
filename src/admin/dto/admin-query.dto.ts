import {
    IsInt,
    IsOptional,
    Max,
    Min,
} from 'class-validator';

import {
    ApiPropertyOptional,
} from '@nestjs/swagger';

export class AdminQueryDto {
    @ApiPropertyOptional({
        example: 1,
        default: 1,
    })
    @IsOptional()
    @IsInt()
    @Min(1)
    page?: number;

    @ApiPropertyOptional({
        example: 20,
        default: 20,
    })
    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(100)
    limit?: number;
}