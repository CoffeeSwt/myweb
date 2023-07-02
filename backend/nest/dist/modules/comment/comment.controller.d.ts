import { Comment } from './../../models/Comment';
import { CommentService } from './comment.service';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    find(query: number): Promise<Comment[] | []>;
}
