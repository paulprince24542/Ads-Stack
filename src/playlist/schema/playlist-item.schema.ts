import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PlaylistIteDocument = PlaylistItem & Document;

@Schema({ timestamps: true })
export class PlaylistItem {
  @Prop({ type: Types.ObjectId, ref: 'Playlist', required: true })
  playlistId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Video', required: true })
  videoId: Types.ObjectId;

  @Prop()
  order: number;
}

export const PlaylistItemSchema = SchemaFactory.createForClass(PlaylistItem);
