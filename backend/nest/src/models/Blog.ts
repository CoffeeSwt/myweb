import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { User } from './User';

@modelOptions({ schemaOptions: { collection: 'blogs', timestamps: true } })
export class Blog {
  /**
   * 作者
   */
  @prop({ required: true, ref: () => User })
  auther: Ref<User>;
  /**
   * 内容
   */
  @prop({ required: true })
  content: string;
  /**
   * 标签
   */
  @prop({ type: () => [String] })
  tags?: string[];
  /**
   * 文章名称
   */
  @prop({ required: true })
  name: string;
  /**
   * 阅读量
   */
  read?: number;
  /**
   * 收藏
   */
  star?: number;
  /**
   * 主题分类
   */
  topic?: string;
}
