import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { RegisterDeviceDto } from './dto/register-device.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Device, DeviceDocument } from './schema/device.schema';
import { Model } from 'mongoose';
import { randomBytes } from 'crypto';
import { HeartbeatDto } from './dto/heartbeat.dto';
import { LoginDeviceDto } from './dto/login-device.dto';
import { Playlist } from 'src/playlist/schema/playlist.schema';

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel(Device.name)
    private deviceModel: Model<DeviceDocument>,

    @InjectModel(Playlist.name)
    private playlistModel: Model<Playlist>,
  ) {}

  async register(registerDeviceDto: RegisterDeviceDto) {
    const existing = await this.deviceModel.findOne({
      deviceId: registerDeviceDto.deviceId,
    });

    if (existing) {
      throw new ConflictException('Device already registered');
    }

    const apiKey = this.generateApiKey();

    const device = new this.deviceModel({
      ...registerDeviceDto,
      apiKey,
      lastSeen: new Date(),
    });

    await device.save();

    return {
      deviceId: device.deviceId,
      apiKey: device.apiKey,
    };
  }

  async authenticate(loginDeviceDto: LoginDeviceDto) {
    const device = await this.deviceModel.findOne({
      deviceId: loginDeviceDto.deviceId,
      apiKey: loginDeviceDto.apiKey,
      isActive: true,
    });

    if (!device) {
      throw new UnauthorizedException('Invalid device credentials');
    }

    return {
      message: 'Device authenticated',
      deviceId: device.deviceId,
    };
  }

  async heartbeat(heartbeatDto: HeartbeatDto) {
    return `This action removes a # device`;
  }

  async getPlaylist(deviceId: string) {
    const device = await this.deviceModel.findOne({
      deviceId,
      // apiKey,
      isActive: true,
    });

    const playlist = await this.playlistModel.find({
      deviceId,
      isActive: true,
    });

    return {
      deviceId,
      playlist,
    };
  }

  async validateDevice(deviceId: string, apiKey: string) {
    return `This action updates a # device`;
  }

  async updateLastSeen(deviceId: string) {
    await this.deviceModel.updateOne(
      { deviceId },
      { lastSeen: new Date(), status: 'online' },
    );
  }

  async setOffline(deviceId: string) {
    await this.deviceModel.updateOne({ deviceId }, { status: 'offline' });
  }

  generateApiKey(): string {
    return randomBytes(32).toString('hex');
  }
}
