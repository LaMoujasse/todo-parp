import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { ColonneService } from './colonne.service';
import { Colonne } from 'src/entities/colonne.entity';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('colonne')
export class ColonneController {
  constructor(private readonly colonneService: ColonneService) {}

  @Get()
  async getAll(): Promise<Colonne[]> {
    const colonnes = await this.colonneService.find();

    console.log(colonnes.constructor.name)
    return colonnes
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
