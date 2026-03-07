import { IsMongoId, IsString } from 'class-validator';

export class CreatePlaylistDto {
  @IsString()
  name: string;

  @IsString()
  deviceId: string;
}
