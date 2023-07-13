import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from 'src/entities/card.entity';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  async getAll(): Promise<Card[]> {
    return this.cardService.findAll();
  }

  @Get(':id')
  async getOne(
    @Param('id') id
  ): Promise<Card> {
    return this.cardService.findOne(id);
  }

  @Post()
  async createOne(
    @Body() body
  ){
    return this.cardService.createOne(body);
  }

  @Delete(':id')
  async remove(
    @Param('id') id
  ){
    return this.cardService.remove(id);
  }
}
