import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlaylistDocument = Playlist & Document;

@Schema({ timestamps: true })
export class Playlist {
  @Prop()
  name: string;

  @Prop()
  deviceId: string;
}

export const PlaylistSchema = SchemaFactory.createForClass(Playlist);
