import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global middleware goes in here if you need
  app.use(logger);
  // ...

  await app.listen(3000);
}
bootstrap();
