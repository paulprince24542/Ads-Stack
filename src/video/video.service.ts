import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Video } from './schema/video.schema';
import { Model } from 'mongoose';

@Injectable()
export class VideoService {
  constructor(
    @InjectModel(Video.name)
    private videoModel: Model<Video>,
  ) {}

  create(createVideoDto: CreateVideoDto) {
    const video = new this.videoModel(createVideoDto);

    return video.save();
  }
}
