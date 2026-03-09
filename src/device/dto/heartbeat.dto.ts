import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class HeartbeatDto {

  @ApiProperty({
    example: "TV-123",
    description: "Unique device identifier"
  })
  @IsString()
  deviceId: string;
}