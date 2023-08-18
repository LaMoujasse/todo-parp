import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

export type UserAuth = any;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneID(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  findOneUser(username: string): Promise<User | null> {
    return this.userRepository.findOneBy({username})
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async createOne(body:any): Promise<User> {
    return await this.userRepository.save(body);
  }

  async updateUser(id:number, body:any): Promise<void> {
    await this.userRepository.update(id ,body);
  }

}
