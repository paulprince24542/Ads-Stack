import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaylistDocument = Playlist & Document;

@Schema({ timestamps: true })
export class Playlist {

  @Prop()
  deviceId: string;

  @Prop()
  videoUrl: string;

  @Prop()
  duration: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);