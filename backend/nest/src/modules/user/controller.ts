import { UsersService } from './service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { User } from '../../models/User';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(): Promise<User[] | null> {
    return await this.userService.findAll();
  }

  @Post('find')
  async findOne(@Body() body: Omit<Partial<User>, 'password'>) {
    return await this.userService.findOne(body);
  }

  @Post('new')
  async create(@Body() user: Omit<User, 'state'>): Promise<User | string> {
    return await this.userService.create(user);
  }

  @Post('login')
  async login(@Body() user: User): Promise<boolean> {
    return await this.userService.login(user);
  }
}
