import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../../../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { User } from '../../../models/User';
import { ReturnModelType } from '@typegoose/typegoose';
export declare class RolesGuard implements CanActivate {
    private reflector;
    private readonly jwtService;
    private readonly jwtConfiguration;
    private readonly userModel;
    constructor(reflector: Reflector, jwtService: JwtService, jwtConfiguration: ConfigType<typeof jwtConfig>, userModel: ReturnModelType<typeof User>);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
