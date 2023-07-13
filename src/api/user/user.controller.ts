import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

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
    return this.userService.findOne(id);
  }

  @Delete(':id')
  async remove(
    @Param('id') id
  ){
    return await this.userService.remove(id);
  }

  @Post()
  async createOne(
    @Body() body
  ){
    return this.userService.createOne(body);
  }
}
