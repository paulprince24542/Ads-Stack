import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlaylistDto {

  @ApiProperty({
    example: "Morning Ads Playlist",
    description: "Name of the playlist"
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "TV-123",
    description: "Device ID to which this playlist is assigned"
  })
  @IsString()
  @IsNotEmpty()
  deviceId: string;
}