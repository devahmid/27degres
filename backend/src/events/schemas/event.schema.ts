import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type EventDocument = Event & Document;

@Schema({ timestamps: true })
export class Event {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  category: string; // Sport, Culture, Repas, Sorties, Autre

  @Prop({ required: true })
  date: Date;

  @Prop()
  location?: string;

  @Prop()
  image?: string;

  @Prop({ default: 0 })
  maxParticipants: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Member' }], default: [] })
  participants: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: 'Member', required: true })
  createdBy: Types.ObjectId;

  @Prop({ default: true })
  isActive: boolean;
}

export const EventSchema = SchemaFactory.createForClass(Event);

