import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDeviceDto {

  @ApiProperty({
    example: "TV-123",
    description: "Unique device identifier"
  })
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @ApiProperty({
    example: "sk_live_9sdf89sdf89sdf",
    description: "API key assigned to the device"
  })
  @IsString()
  @IsNotEmpty()
  apiKey: string;
}