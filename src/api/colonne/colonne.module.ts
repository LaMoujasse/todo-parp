import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColonneService } from './colonne.service';
import { ColonneController } from './colonne.controller';
import { Colonne } from '../../entities/colonne.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Colonne])],
  providers: [ColonneService],
  controllers: [ColonneController],
})
export class ColonneModule {}
