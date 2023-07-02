import { BlogService } from './comment.service';
import { Blog } from './../../models/Blog';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    find(body: Partial<Blog>): Promise<any>;
    create(body: Blog): Promise<any>;
}
