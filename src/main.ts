import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('AUTH-MICROSERVICE');
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3001);
  logger.log(`Auth microservice running on port ${3000}`);
}
bootstrap();
