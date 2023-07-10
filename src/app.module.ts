import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { UsersModule } from './api/user/user.module';
import { ColonneModule } from './api/colonne/colonne.module';
import { Colonne } from './entities/colonne.entity';
import { Card } from './entities/card.entity';
import { List } from './entities/list.entity';
import { Item } from './entities/item.entity';

@Module({
  imports: [
    UsersModule,
    ColonneModule,
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'todo-parp',
    entities: [User, Colonne, Card, List, Item], 
    synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
