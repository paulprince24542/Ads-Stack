import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Device, DeviceSchema } from './schema/device.schema';
import { DeviceGateway } from './device-gateway';
import { Playlist, PlaylistSchema } from 'src/playlist/schema/playlist.schema';
import {
  PlaylistItem,
  PlaylistItemSchema,
} from 'src/playlist/schema/playlist-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Device.name, schema: DeviceSchema },
      { name: Playlist.name, schema: PlaylistSchema },
      { name: PlaylistItem.name, schema: PlaylistItemSchema },
    ]),
  ],
  controllers: [DeviceController],
  providers: [DeviceService, DeviceGateway],
  exports: [DeviceService, DeviceGateway], // important
})
export class DeviceModule {}
