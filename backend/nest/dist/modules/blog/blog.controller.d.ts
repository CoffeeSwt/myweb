import { BlogService } from './blog.service';
import { Blog } from './../../models/Blog';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    find(body: Partial<Blog>): Promise<Blog[] | []>;
    create(body: Blog): Promise<Blog | import("@nestjs/common").MethodNotAllowedException>;
}
