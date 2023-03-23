/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import {MongooseModule} from '@nestjs/mongoose'


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://habitpluscaritas:L2YVbKyAYBOGsvdU@cluster0.vitcmvo.mongodb.net/test?tls=true',
    ),
    ContentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
