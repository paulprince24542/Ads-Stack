import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDeviceDto {

  @ApiProperty({
    example: "TV-123",
    description: "Unique identifier of the device"
  })
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @ApiProperty({
    example: "Lobby TV Screen",
    description: "Human readable name for the device"
  })
  @IsString()
  @IsNotEmpty()
  deviceName: string;

  @ApiProperty({
    example: "ANDROID_TV",
    description: "Type of the device"
  })
  @IsString()
  @IsNotEmpty()
  deviceType: string;
}