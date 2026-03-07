import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Playlist, PlaylistSchema } from './schema/playlist.schema';
import {
  PlaylistItem,
  PlaylistItemSchema,
} from './schema/playlist-item.schema';

import { DeviceModule } from 'src/device/device.module';
import { Device, DeviceSchema } from 'src/device/schema/device.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Playlist.name, schema: PlaylistSchema },
      { name: PlaylistItem.name, schema: PlaylistItemSchema },
      { name: Device.name, schema: DeviceSchema },
    ]),
    DeviceModule,
  ],
  controllers: [PlaylistController],
  providers: [PlaylistService],
})
export class PlaylistModule {}
