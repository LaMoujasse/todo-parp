import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ListService } from './list.service';
import { List } from 'src/entities/list.entity';

@Controller('list')
export class ListController {
  constructor(private readonly ListService: ListService) {}

  @Get()
  async getAll(): Promise<List[]> {
    return this.ListService.findAll();
  }

  @Get(':id')
  async getOne(
    @Param('id') id
  ): Promise<List> {
    return this.ListService.findOne(id);
  }

  @Post()
  async createOne(
    @Body() body
  ){
    return await this.ListService.createOne(body);
  }
}
