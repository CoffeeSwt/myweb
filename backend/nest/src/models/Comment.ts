import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { User } from './User';
import { Blog } from './Blog';

@modelOptions({ schemaOptions: { collection: 'comments', timestamps: true } })
export class Comment {
  @prop({ required: true, ref: () => User })
  user: Ref<User>;
  @prop({ required: true, ref: () => Blog })
  blog: Ref<Blog>;
  @prop({ ref: () => Comment })
  comment?: Ref<Comment>;
  @prop({ required: true })
  content: string;
  @prop()
  star?: number;
}
