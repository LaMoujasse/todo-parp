import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from '../../entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  findAll(): Promise<Card[]> {
    return this.cardRepository.find();
  }

  findOne(id: number): Promise<Card | null> {
    return this.cardRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.cardRepository.delete(id);
  }

  async createOne(card: Card): Promise<Card|Card> {
    return await this.cardRepository.save(card);
  }
}
