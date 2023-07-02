import { Comment } from './../../models/Comment';
import { ReturnModelType } from '@typegoose/typegoose';
export declare class CommentService {
    private readonly commentModel;
    constructor(commentModel: ReturnModelType<typeof Comment>);
}
