import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
import { RequestLoggingInterceptor } from './common/interceptors/request-logging.interceptor.js';
import { PrismaService } from './prisma/prisma.service.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(
    new RequestLoggingInterceptor(
      app.get(PrismaService),
    ),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger documentation configuration
  const config = new DocumentBuilder()
    .setTitle('EchoGPT API')
    .setDescription(
      'REST API documentation for EchoGPT - a multi-model AI chat platform.',
    )
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter your JWT access token',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}

bootstrap();