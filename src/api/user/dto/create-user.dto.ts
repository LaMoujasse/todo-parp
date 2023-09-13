import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import {Unique} from 'typeorm';

@Unique(['username','email'])
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