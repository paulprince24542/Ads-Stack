import { IsString, IsNumber } from "class-validator";

export class CreateVideoDto {

  @IsString()
  title: string;

  @IsString()
  fileUrl: string;

  @IsNumber()
  duration: number;

}