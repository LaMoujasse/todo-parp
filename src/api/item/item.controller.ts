import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from 'src/entities/item.entity';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async getAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  async getOne(
    @Param('id') id
  ): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  async createOne(
    @Body() body
  ){
    return await this.itemService.createOne(body)
  }

  @Delete(':id')
  async remove(
    @Param('id') id
  ){
    return await this.itemService.remove(id)
  }
}
