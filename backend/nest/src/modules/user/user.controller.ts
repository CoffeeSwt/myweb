import { UsersService } from './user.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { User } from '../../models/User';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('find')
  async find(@Body() body: Omit<Partial<User>, 'password'>) {
    return await this.userService.find(body);
  }
}
