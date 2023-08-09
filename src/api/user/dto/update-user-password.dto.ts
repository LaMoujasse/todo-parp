import { IsNotEmpty, IsString } from "class-validator";

export class UpdateUserPasswordDto {

  @IsNotEmpty()
  @IsString()
  password: string;
}