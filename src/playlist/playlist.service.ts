import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PlaylistItem } from './schema/playlist-item.schema';
import { Model, Types } from 'mongoose';
import { Playlist } from './schema/playlist.schema';
import { DeviceGateway } from 'src/device/device-gateway';
import { Device } from 'src/device/schema/device.schema';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectModel(Playlist.name)
    private playListModel: Model<Playlist>,

    @InjectModel(PlaylistItem.name)
    private playListItemModel: Model<PlaylistItem>,

    @InjectModel(Device.name)
    private deviceModel: Model<Device>,

    private deviceGateway: DeviceGateway,
  ) {}

  async create(createPlaylistDto: CreatePlaylistDto) {
    const playlist = new this.playListModel({
      name: createPlaylistDto.name,
      deviceId: createPlaylistDto.deviceId,
    });

    return playlist.save();
  }

  async addVideoToPlaylist(data: any) {
    const findVideo = await this.playListItemModel.findOne({
      videoId: new Types.ObjectId(data.videoId),
      playlistId: new Types.ObjectId(data.playlistId),
    });

    if (findVideo) {
      throw new ConflictException('Video already found in playlist');
    }

    const item = new this.playListItemModel({
      playlistId: new Types.ObjectId(data.playlistId),
      videoId: new Types.ObjectId(data.videoId),
      order: data.order,
    });

    const saved = await item.save();

    // fetch playlist to get deviceId
    const playlist = await this.playListModel.findById(data.playlistId);
    console.log(playlist);

    if (playlist?.deviceId) {
      this.deviceGateway.broadcastPlaylistUpdate(playlist.deviceId, {
        message: 'New video added to playlist',
        playlistId: playlist._id,
      });
    }

    return saved;
  }
}
