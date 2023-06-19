// src/auth/auth.controller.ts
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/models/User';
import { Public } from '../../common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('new')
  async create(@Body() user: Omit<User, 'state'>): Promise<User | string> {
    return await this.authService.create(user);
  }

  @Public()
  @Post('login')
  async login(@Body() user: User): Promise<boolean> {
    return await this.authService.login(user);
  }
}
