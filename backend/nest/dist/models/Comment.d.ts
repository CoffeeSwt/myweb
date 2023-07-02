import { Ref } from '@typegoose/typegoose';
import { User } from './User';
import { Blog } from './Blog';
export declare class Comment {
    user: Ref<User>;
    blog: Ref<Blog>;
    comment?: Ref<Comment>;
    content: string;
    star?: number;
}
