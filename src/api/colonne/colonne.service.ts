import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Colonne } from '../../entities/colonne.entity';

@Injectable()
export class ColonneService {
  constructor(
    @InjectRepository(Colonne)
    private colonneRepository: Repository<Colonne>,
  ) {}

  findAll(): Promise<Colonne[]> {
    return this.colonneRepository.find();
  }

  findOne(id: number): Promise<Colonne | null> {
    return this.colonneRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.colonneRepository.delete(id);
  }
}