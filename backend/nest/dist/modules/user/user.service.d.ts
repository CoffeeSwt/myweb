import { User } from '../../models/User';
import { ReturnModelType } from '@typegoose/typegoose';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: ReturnModelType<typeof User>);
    find(queryParams: Omit<Partial<User>, 'password'>): Promise<Array<User> | []>;
}
