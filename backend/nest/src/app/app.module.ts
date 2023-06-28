import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../modules/user/user.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypegooseModule.forRoot('mongodb://root:120400@localhost:27017/?authMechanism=DEFAULT'),
    // TypegooseModule.forRoot('mongodb://localhost:27017/myweb'),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
