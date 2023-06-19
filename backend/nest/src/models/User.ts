import { prop, modelOptions } from '@typegoose/typegoose';

type UserState = 'activate' | 'deactivate';

@modelOptions({ schemaOptions: { _id: false } })
class Job {
  @prop()
  name: string;
  @prop()
  company: string;
}

@modelOptions({ schemaOptions: { collection: 'users' } })
export class User {
  
  @prop({ required: true })
  username: string;

  @prop({ required: true })
  password: string;

  @prop()
  state: UserState;

  @prop()
  job: Job;
}
