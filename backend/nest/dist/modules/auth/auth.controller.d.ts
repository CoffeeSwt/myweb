import { AuthService } from './auth.service';
import { User } from 'src/models/User';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(user: Omit<User, 'state'>): Promise<User | string>;
    login(user: User): Promise<boolean>;
}
