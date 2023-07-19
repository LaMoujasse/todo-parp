import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity.';

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
}
