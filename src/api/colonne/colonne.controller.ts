import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ColonneService } from './colonne.service';
import { Colonne } from 'src/entities/colonne.entity';

@Controller('colonne')
export class ColonneController {
  constructor(private readonly colonneService: ColonneService) {}

  @Get()
  async getAll(): Promise<Colonne[]> {
    return this.colonneService.findAll();
  }

  @Get(':id')
  async getOne(
    @Param('id') id
  ): Promise<Colonne> {
    return this.colonneService.findOne(id);
  }

  @Post()
  async createOne(
    @Body() body 
    ){
      return await this.colonneService.createOne(body);
    }
  
  @Delete(':id')
  async remove(
    @Param('id') id
  ){
    return await this.colonneService.remove(id);
  }
}
