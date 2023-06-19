import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '../../models/User';
import { ReturnModelType } from '@typegoose/typegoose';
import { flattenObject } from '../../utils/index';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: ReturnModelType<typeof User>) {}

  async find(queryParams: Omit<Partial<User>, 'password'>): Promise<Array<User> | []> {
    return await this.userModel.find(flattenObject(queryParams)).exec();
  }
}
