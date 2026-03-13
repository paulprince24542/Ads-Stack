import { IsEmail, IsString, IsNotEmpty, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "src/enums/user-role.enum";


export class CreateUserDto {

  @ApiProperty({ example: "Admin User" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "admin@example.com" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "Admin@123" })
  @IsString()
  password: string;

  @ApiProperty({ enum: UserRole, example: UserRole.ADMIN })
  @IsEnum(UserRole)
  role: UserRole;

}