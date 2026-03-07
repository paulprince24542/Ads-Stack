import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { DeviceService } from 'src/device/device.service';


@Injectable()
export class DeviceAuthGuard implements CanActivate {

  constructor(private deviceService: DeviceService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const request = context.switchToHttp().getRequest();

    const deviceId = request.headers['x-device-id'];
    const apiKey = request.headers['x-api-key'];

    if (!deviceId || !apiKey) {
      throw new UnauthorizedException('Missing device credentials');
    }

    const device = await this.deviceService.validateDevice(
      deviceId,
      apiKey,
    );

    if (!device) {
      throw new UnauthorizedException('Invalid device credentials');
    }

    request.device = device;

    return true;
  }
}