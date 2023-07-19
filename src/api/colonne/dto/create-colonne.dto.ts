import { IsNotEmpty, IsString } from "class-validator";

export class CreateColonneDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}