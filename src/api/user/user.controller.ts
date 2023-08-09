import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUsernameDto } from './dto/update-user-username.dto';
import { UpdateUserEmailDto } from './dto/update-user-email.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.findAll(); 
  }

  @Get(':id')
  async getOne(
    @Param('id') id
  ): Promise<User> {
    console.log('Yoo')
    return this.userService.findOne(id);
  }

  @Delete(':id')
  async remove(
    @Param('id') id
  ): Promise<void> {
    return this.userService.remove(id)
  }

  @Post()
  async createOne(
    @Body() body: CreateUserDto
  ){
    return await this.userService.createOne(body)
  }

  @Put('username/:id')
  async updateUsername(
    @Param('id') id: number,
    @Body() body: UpdateUsernameDto
  ): Promise<any> {
    return await this.userService.updateUsername(id,body);
  }

  @Put('email/:id')
  async updateEmail(
    @Param('id') id: number,
    @Body() body: UpdateUserEmailDto
  ): Promise<any> {
    return await this.userService.updateEmail(id,body);
  }

  @Put('password/:id')
  async updatePassword(
    @Param('id') id: number,
    @Body() body: UpdateUserPasswordDto
  ): Promise<any> {
    return await this.userService.updatePassword(id,body);
  }
  
}
