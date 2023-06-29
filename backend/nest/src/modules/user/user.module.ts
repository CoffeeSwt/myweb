import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from 'src/config/jwt.config';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from '../../models/User';
import { RolesGuard } from '../auth/guards/roles.gurad';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    TypegooseModule.forFeature([User]),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  controllers: [UserController],
  providers: [
    UsersService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class UserModule {}
