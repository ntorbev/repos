import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';

enableProdMode();

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix('api');
  // const swaggerBaseConfig = new DocumentBuilder()
  //   .setTitle('Rental')
  //   .setDescription('The rental API description')
  //   .setVersion('1.0')
  //   .addBearerAuth()
  //   .build();
  // const swaggerDocument = SwaggerModule.createDocument(app, swaggerBaseConfig);
  // SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(4200, () => {
    console.log('333333333333333333333333');
  }).catch(err => console.log(err));
}

bootstrap().catch(err => console.log('test', err));


