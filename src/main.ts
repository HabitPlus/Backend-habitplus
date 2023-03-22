/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
app.enableCors();

  app.setGlobalPrefix('habitApi/v1');
  const options = new DocumentBuilder()
  .setTitle("HABIT + DE CARITAS")
  .setDescription("API rest de Caritas Catalunya")
  .setVersion("1.0")
  .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup("docs", app, document);

const PORT = (process.env.PORT || 4000);
await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
bootstrap();
