import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '../../models/User';
import { ReturnModelType } from '@typegoose/typegoose';
import { flattenObject } from '../../utils/index';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: ReturnModelType<typeof User>) {}

  async create(createUserDto: Omit<User, 'state'>): Promise<User | string> {
    const user = await this.userModel.findOne({ username: createUserDto.username }).exec();
    if (user) {
      return 'User has already exist,please login.';
    }
    (createUserDto as User).state = 'activate';
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async find(queryParams: Omit<Partial<User>, 'password'>): Promise<Array<User> | []> {
    return await this.userModel.find(flattenObject(queryParams)).exec();
  }

  async login(user: User): Promise<boolean> {
    const userFind = await this.userModel.findOne(user).exec();
    if (!userFind) return false;
    if (userFind.password !== user.password) return false;
    return true;
  }
}
