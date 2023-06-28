import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../../config/jwt.config';
import { HashingService } from './hashing.service';
import { User } from '../../models/User';
import { ReturnModelType } from '@typegoose/typegoose';
export declare class AuthService {
    private readonly userModel;
    private readonly jwtService;
    private readonly jwtConfiguration;
    private readonly hashingService;
    constructor(userModel: ReturnModelType<typeof User>, jwtService: JwtService, jwtConfiguration: ConfigType<typeof jwtConfig>, hashingService: HashingService);
    create(createUserDto: Omit<User, 'state'>): Promise<User | string>;
    login(user: User): Promise<boolean | any>;
    generateTokens(user: any): Promise<{
        token: string;
    }>;
    private signToken;
}
