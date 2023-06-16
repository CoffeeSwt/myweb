import { Module } from '@nestjs/common';
import { UserController } from './controller';
import { UsersService } from './service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from '../../models/User';

@Module({
  imports: [TypegooseModule.forFeature([User])],
  controllers: [UserController],
  providers: [UsersService],
})
export class UserModule {}
