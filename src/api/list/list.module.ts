import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { List } from '../../entities/list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([List])],
  providers: [ListService],
  controllers: [ListController],
})
export class ListModule {}
