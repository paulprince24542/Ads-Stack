import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VideoDocument = Video & Document;

@Schema({ timestamps: true })
export class Video {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  fileUrl: string;

  @Prop()
  duration: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
