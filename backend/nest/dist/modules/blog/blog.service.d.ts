import { Blog } from './../../models/Blog';
import { MethodNotAllowedException } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
export declare class BlogService {
    private readonly blogModel;
    constructor(blogModel: ReturnModelType<typeof Blog>);
    find(queryParams: Partial<Blog>): Promise<Array<Blog> | []>;
    create(blogDto: Blog): Promise<Blog | MethodNotAllowedException>;
}
