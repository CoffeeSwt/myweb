import { UsersService } from './user.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { User } from '../../models/User';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/constants';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('find')
  @Roles(Role.Admin)
  async find(@Body() body: Omit<Partial<User>, 'password'>) {
    return await this.userService.find(body);
  }
}
