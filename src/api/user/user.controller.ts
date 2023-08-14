import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

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

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() body: CreateUserDto
  ): Promise<any> {
    return await this.userService.updateUser(id,body);
  }
  
}
