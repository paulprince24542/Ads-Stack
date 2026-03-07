import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDeviceDto {
  @IsString()
  deviceId: string;

  @IsString()
  apiKey: string;
}
