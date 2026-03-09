import { IsMongoId, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AddPlaylistItemDto {

  @ApiProperty({
    example: "64f1b3a7e3a9b21c4c123456",
    description: "MongoDB ID of the playlist"
  })
  @IsMongoId()
  playlistId: string;

  @ApiProperty({
    example: "64f1b3a7e3a9b21c4c654321",
    description: "MongoDB ID of the video"
  })
  @IsMongoId()
  videoId: string;

  @ApiProperty({
    example: 1,
    description: "Playback order of the video in the playlist"
  })
  @IsNumber()
  order: number;

}