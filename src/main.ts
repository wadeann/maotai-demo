import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import 'dotenv/config';
import { AppModule } from './app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`http服务启动成功: http://127.0.0.1:${port}`);
}



bootstrap();
