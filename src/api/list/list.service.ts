import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from '../../entities/list.entity';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private listRepository: Repository<List>,
  ) {}

  findAll(): Promise<List[]> {
    return this.listRepository.find();
  }

  findOne(id: number): Promise<List | null> {
    return this.listRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.listRepository.delete(id);
  }
}
