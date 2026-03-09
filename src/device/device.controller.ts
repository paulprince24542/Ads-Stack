import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Device, DeviceDocument } from './schema/device.schema';
import { Model } from 'mongoose';
import { RegisterDeviceDto } from './dto/register-device.dto';
import { HeartbeatDto } from './dto/heartbeat.dto';
import { DeviceAuthGuard } from 'src/guards/device-guard';
import { LoginDeviceDto } from './dto/login-device.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('device')
@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post('register')
  register(@Body() registerDeviceDto: RegisterDeviceDto) {
    return this.deviceService.register(registerDeviceDto);
  }

  @Post('authenticate')
  login(@Body() loginDeviceDto: LoginDeviceDto) {
    return this.deviceService.authenticate(loginDeviceDto);
  }

  @Get('playlist')
  findAll(@Headers() headers) {
    const deviceId = headers['x-device-id'];
    return this.deviceService.getPlaylist(deviceId);
  }

  @UseGuards(DeviceAuthGuard)
  @Post('heartbeat')
  async heartbeat(@Body() heartbeatDto: HeartbeatDto) {
    return this.deviceService.heartbeat(heartbeatDto);
  }
}
