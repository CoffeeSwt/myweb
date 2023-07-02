import { Comment } from './../../models/Comment';
import { CommentService } from './comment.service';
import { Blog } from '../../models/Blog';
import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/constants';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('find')
  @Public()
  async find(@Query() query: number) {
    return await this.commentService.find(query);
  }
}
