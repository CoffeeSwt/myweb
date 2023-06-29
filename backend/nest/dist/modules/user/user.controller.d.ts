import { UsersService } from './user.service';
import { User } from '../../models/User';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    find(body: Omit<Partial<User>, 'password'>): Promise<User[] | []>;
}
