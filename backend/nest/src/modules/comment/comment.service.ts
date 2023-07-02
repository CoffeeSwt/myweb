import { Comment } from '../../models/Comment';
import { Blog } from '../../models/Blog';
import { Injectable, MethodNotAllowedException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { flattenObject } from '../../utils/index';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment) private readonly commentModel: ReturnModelType<typeof Comment>) {}
  async find(queryParams: number): Promise<Array<Comment> | []> {
    return await this.commentModel.find({ 'blog._id': queryParams }).exec();
  }
}
