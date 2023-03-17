import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path'
import { config } from 'dotenv'



async function bootstrap() {

  config()
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'src/public'));

  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));

  app.setViewEngine('ejs');

  await app.listen(5000);
}


bootstrap();
