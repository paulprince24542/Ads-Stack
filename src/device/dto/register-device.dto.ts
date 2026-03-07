import { IsString, IsNotEmpty } from 'class-validator';

export class RegisterDeviceDto {
  @IsString()
  deviceId: string;

  @IsString()
  deviceName: string;

  @IsString()
  deviceType: string;
}
