import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../modules/user';

import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [UserModule, TypegooseModule.forRoot('mongodb://localhost:27017/myweb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
