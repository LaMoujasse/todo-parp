import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsBoolean()
  finish: boolean;
}