import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { logger } from './middlewares/logger.middleware';
import { AllExceptionsFilter } from './util/exceptions/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global middleware(s) goes in here if you need them.
  app.use(logger);
  // ...

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  await app.listen(3000);
}
bootstrap();
