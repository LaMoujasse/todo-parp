import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateUserEmailDto {

  @IsNotEmpty()
  @IsEmail()
  email: string;
}