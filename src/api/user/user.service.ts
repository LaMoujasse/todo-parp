import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity.';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    
      findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
      async findOne(id: number): Promise<User | null> {
        const options: FindOneOptions = {
            where: {
                id
            }
        }
        const result = await this.usersRepository.findOne(options);
        console.log(result)
        return result
      }
    
      async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
      }
}
