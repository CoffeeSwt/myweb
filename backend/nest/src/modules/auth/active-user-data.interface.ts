import * as mongoose from 'mongoose';

export interface ActiveUserData {
  sub: mongoose.Types.ObjectId;
  name: string;
}
