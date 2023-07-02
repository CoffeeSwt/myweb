import { ForbiddenException, MethodNotAllowedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/models/User';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(user: Omit<User, 'state'>): Promise<User | MethodNotAllowedException>;
    login(user: User): Promise<ForbiddenException | object>;
}
