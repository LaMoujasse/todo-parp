import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { ColonneService } from './colonne.service';
import { Colonne } from 'src/entities/colonne.entity';
import { CreateColonneDto } from './dto/create-colonne.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('colonne')
export class ColonneController {
  constructor(private readonly colonneService: ColonneService) {}

  @Get()
  async getAll(): Promise<Colonne[]> {
    const colonnes = await this.colonneService.find();

    console.log(colonnes[0].constructor.name)
    return colonnes
  }

  @Get(':id')
  async getOne(
    @Param('id') id,
  ): Promise<Colonne> {
    return this.colonneService.findOne(id);
  }

  @Post()
  async createOne(
    @Body() body : CreateColonneDto
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
