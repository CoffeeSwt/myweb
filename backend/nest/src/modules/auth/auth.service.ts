// src/auth/auth.service.ts
import { Inject, Injectable, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../../config/jwt.config';
import { HashingService } from './hashing.service'; // +
import { InjectModel } from 'nestjs-typegoose';
import { User } from '../../models/User';
import { ReturnModelType } from '@typegoose/typegoose';
import { ActiveUserData } from './active-user-data.interface';
import { Role } from 'src/constants';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly hashingService: HashingService,
  ) {}

  async create(createUserDto: Omit<User, 'state'>): Promise<User | string> {
    const user = await this.userModel.findOne({ username: createUserDto.username }).exec();
    if (user) {
      return 'User has already exist,please login.';
    }
    const hashedPassword = await this.hashingService.hash(createUserDto.password);
    (createUserDto as User).state = 'activate';
    (createUserDto as User).password = hashedPassword;
    createUserDto.roles = [Role.Normal];
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async login(user: User): Promise<ForbiddenException | object> {
    const { username, password } = user;
    const userFind = await this.userModel.findOne({ username }).exec();
    if (!userFind) return new ForbiddenException();
    const isEqual = await this.hashingService.compare(password, userFind.password);
    if (!isEqual) return new ForbiddenException();

    return await this.generateTokens(userFind);
  }

  async generateTokens(user: any) {
    const token = await this.signToken<Partial<ActiveUserData>>(user._id, { name: user.username });
    return { token: `Bearer ${token}` };
  }

  private async signToken<T>(userId: number, payload?: T) {
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        secret: this.jwtConfiguration.secret,
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        expiresIn: this.jwtConfiguration.accessTokenTtl,
      },
    );
  }

  async validateUser(username, password) {
    const userFind = await this.userModel.findOne({ username }).exec();
    if (!userFind) return null;
    const isEqual = await this.hashingService.compare(password, userFind.password);
    if (!isEqual) return null;
    return userFind;
  }
}
