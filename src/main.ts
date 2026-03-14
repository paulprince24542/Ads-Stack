import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { requestIdMiddleware } from './common/middleware/request-id.middleware';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { AllExceptionsFilter } from './common/filters/all-exception.filter';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(requestIdMiddleware);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Global response wrapper
  app.useGlobalInterceptors(new ResponseInterceptor());

  // Global error handler
  app.useGlobalFilters(new AllExceptionsFilter());

  // Global Cors

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('ADS Stack API')
    .setDescription('Service Management APIs')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);

  return app;
}
bootstrap();
