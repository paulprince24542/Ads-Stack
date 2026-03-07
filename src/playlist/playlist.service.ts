import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PlaylistItem } from './schema/playlist-item.schema';
import { Model, Types } from 'mongoose';
import { Playlist } from './schema/playlist.schema';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectModel(Playlist.name)
    private playListModel: Model<Playlist>,

    @InjectModel(PlaylistItem.name)
    private playlistItemModel: Model<PlaylistItem>,
  ) {}

  async create(createPlaylistDto: CreatePlaylistDto) {
    const playlist = new this.playListModel({
      name: createPlaylistDto.name,
      deviceId: createPlaylistDto.deviceId,
    });

    return playlist.save();
  }

  async addVideoToPlaylist(data: any) {
    const item = new this.playlistItemModel({
      playlistId: new Types.ObjectId(data.playlistId),
      videoId: new Types.ObjectId(data.videoId),
      order: data.order,
    });

    return item.save();
  }
}
