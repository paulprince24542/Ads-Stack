import { IsMongoId, IsNumber } from "class-validator";

export class AddPlaylistItemDto {

  @IsMongoId()
  playlistId: string;

  @IsMongoId()
  videoId: string;

  @IsNumber()
  order: number;

}