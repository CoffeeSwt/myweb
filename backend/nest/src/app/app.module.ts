import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../modules/user/user.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../modules/auth/guards/roles.gurad';

@Module({
  imports: [
    UserModule,
    AuthModule,
    // TypegooseModule.forRoot('mongodb://root:120400@localhost:27017/myweb?authMechanism=DEFAULT&authSource=admin'),
    TypegooseModule.forRoot('mongodb://localhost:27017/myweb'),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
