import { BlogService } from './blog.service';
import { Blog } from './../../models/Blog';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/constants';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('find')
  @Public()
  async find(@Body() body: Partial<Blog>) {
    return await this.blogService.find(body);
  }

  @Post('new')
  @Roles(Role.Admin)
  async create(@Body() body: Blog) {
    return await this.blogService.create(body);
  }
}
