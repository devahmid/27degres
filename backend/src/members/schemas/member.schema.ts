import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MemberDocument = Member & Document;

@Schema({ timestamps: true })
export class Member {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phone?: string;

  @Prop()
  avatar?: string;

  @Prop({ default: 'Membre' })
  role: string;

  @Prop({ default: false })
  isActive: boolean;

  @Prop({ default: false })
  cotisationPaid: boolean;

  @Prop()
  cotisationYear?: number;

  @Prop({ default: new Date() })
  memberSince: Date;

  @Prop()
  password?: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);

