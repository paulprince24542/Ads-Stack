import { IsString, IsNumber, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class CreateVideoDto {

  @ApiProperty({
    example: "Summer Sale Ad",
    description: "Title of the video"
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: "https://cdn.example.com/videos/summer-sale.mp4",
    description: "Public URL of the video file"
  })
  @IsString()
  @IsNotEmpty()
  fileUrl: string;

  @ApiProperty({
    example: 30,
    description: "Duration of the video in seconds"
  })
  @Type(() => Number)
  @IsNumber()
  duration: number;

}