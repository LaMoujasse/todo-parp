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

  find(): Promise<Colonne[]> {
    return this.colonneRepository.find();
  }

  findOne(id: number): Promise<Colonne | null> {
    return this.colonneRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.colonneRepository.delete(id);
  }

  async createOne(body): Promise<Colonne|Colonne[]> {
    return await this.colonneRepository.save(body);
  }
}
