import { Blog } from './../../models/Blog';
import { Injectable, MethodNotAllowedException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { flattenObject } from '../../utils/index';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog) private readonly blogModel: ReturnModelType<typeof Blog>) {}

  async find(queryParams: Partial<Blog>): Promise<Array<Blog> | []> {
    return await this.blogModel.find(flattenObject(queryParams)).exec();
  }

  async create(blogDto: Blog): Promise<Blog | MethodNotAllowedException> {
    const blog = await this.blogModel.findOne({ name: blogDto.name }).exec();
    if (blog) {
      return new MethodNotAllowedException('Blog has already exist.');
    }
    const createdBlog = new this.blogModel(blogDto);
    return createdBlog.save();
  }
}
