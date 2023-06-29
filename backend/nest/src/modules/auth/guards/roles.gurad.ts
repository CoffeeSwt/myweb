import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../../../common/decorators/roles.decorator';
import { Role } from '../../../constants';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../../../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '../../../models/User';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) throw new UnauthorizedException();
    const payload = await this.jwtService.verifyAsync(token, this.jwtConfiguration);
    const user = await this.userModel.findById(payload.sub).exec();
    const flag = requiredRoles.some((role) => user?.roles?.includes(role));
    if (!flag) throw new ForbiddenException();
    return true;
    // const roleCodes = user.roles?.map((item) => item.code);
    // const flag = requiredRoles.some((role) => roleCodes?.includes(role));
    // if (!flag) {
    //   //   throw new InternalErrorException(errorResult(ErrorCodes.NoAuth));
    //   console.error(403);
    // }
    // return flag;
  }
  private extractTokenFromHeader(request: any): string | undefined {
    const [_, token] = request.headers.authorization?.split(' ') ?? [];
    return token;
  }
}
