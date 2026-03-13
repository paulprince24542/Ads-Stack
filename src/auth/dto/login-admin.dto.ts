import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {

  @ApiProperty({
    example: "admin@example.com",
    description: "Admin email address"
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: "Admin@123",
    description: "Admin account password"
  })
  @IsString()
  @IsNotEmpty()
  password: string;

}