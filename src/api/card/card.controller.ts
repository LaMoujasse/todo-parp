import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from 'src/entities/card.entity';
import { CreateCardDto } from './dto/create-card.dto';

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
    @Body() body: CreateCardDto
  ){
    const newCard = new Card()
    newCard.description = body.description;
    newCard.title = body.title;
    return this.cardService.createOne(newCard);
  }

  @Delete(':id')
  async remove(
    @Param('id') id
  ){
    return await this.cardService.remove(id);
  }
}
