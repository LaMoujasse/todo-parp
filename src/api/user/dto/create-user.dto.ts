import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    username: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    password: string;

    @IsNotEmpty()
    @IsEmail()
    @IsOptional()
    email: string;
}