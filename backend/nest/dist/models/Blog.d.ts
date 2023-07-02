import { Ref } from '@typegoose/typegoose';
import { User } from './User';
export declare class Blog {
    auther: Ref<User>;
    content: string;
    tags?: string[];
    name: string;
    read?: number;
    star?: number;
    topic?: string;
}
