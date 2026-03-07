import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Playlist, PlaylistSchema } from 'src/playlist/schema/playlist.schema';
import { PlaylistItem, PlaylistItemSchema } from 'src/playlist/schema/playlist-item.schema';
import { Video, VideoSchema } from './schema/video.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      // { name: Playlist.name, schema: PlaylistSchema },
      // { name: PlaylistItem.name, schema: PlaylistItemSchema },
      { name: Video.name, schema: VideoSchema },
    ]),
  ],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}
