/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import {MongooseModule} from '@nestjs/mongoose'
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://habitpluscaritas:L2YVbKyAYBOGsvdU@cluster0.vitcmvo.mongodb.net/test?tls=true',
    ),
    ContentModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
