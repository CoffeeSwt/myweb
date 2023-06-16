import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '../../models/User';
import { ReturnModelType } from '@typegoose/typegoose';

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

  async findAll(): Promise<User[] | null> {
    return await this.userModel.find().exec();
  }

  async findOne(queryParams: Omit<Partial<User>, 'password'>): Promise<User | null> {
    const res = await this.userModel.findOne(queryParams).exec();
    if (!res) return null;
    return res;
  }

  async login(user: User): Promise<boolean> {
    const userFind = await this.userModel.findOne(user).exec();
    if (!userFind) return false;
    if (userFind.password !== user.password) return false;
    return true;
  }
}
