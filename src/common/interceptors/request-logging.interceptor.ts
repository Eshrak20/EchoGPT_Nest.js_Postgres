import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';

import type {
    Request,
} from 'express';

import {
    Observable,
} from 'rxjs';

import {
    tap,
} from 'rxjs/operators';

import {
    PrismaService,
} from '../../prisma/prisma.service.js';

@Injectable()
export class RequestLoggingInterceptor
    implements NestInterceptor
{
    constructor(
        private readonly prisma:
            PrismaService,
    ) {}

    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<any> {
        const request =
            context
                .switchToHttp()
                .getRequest<Request>();

        const startedAt =
            Date.now();

        return next
            .handle()
            .pipe(
                tap({
                    next: () => {
                        void this.saveLog(
                            request,
                            200,
                            startedAt,
                        );
                    },

                    error: (error) => {
                        const statusCode =
                            error?.status ??
                            500;

                        void this.saveLog(
                            request,
                            statusCode,
                            startedAt,
                        );
                    },
                }),
            );
    }

    private async saveLog(
        request: Request,
        statusCode: number,
        startedAt: number,
    ) {
        try {
            const user =
                request.user as
                    | {
                          id?: string;
                      }
                    | undefined;

            await this.prisma.apiRequestLog.create({
                data: {
                    userId:
                        user?.id ?? null,

                    method:
                        request.method,

                    path:
                        request.originalUrl,

                    statusCode,

                    responseTime:
                        Date.now() -
                        startedAt,

                    ipAddress:
                        request.ip,

                    userAgent:
                        request.headers[
                            'user-agent'
                        ] ?? null,
                },
            });
        } catch (error) {
            console.error(
                'Failed to save API request log:',
                error,
            );
        }
    }
}