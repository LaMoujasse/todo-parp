import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
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
import { CardModule } from './api/card/card.module';
import { ListModule } from './api/list/list.module';
import { ItemModule } from './api/item/item.module';
import { LoggerMiddleware, test } from './logger.middleware';

@Module({
  imports: [
    UsersModule,
    ColonneModule,
    CardModule,
    ListModule,
    ItemModule,
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
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      //.exclude({path: 'user', method:RequestMethod.GET})
      .forRoutes('*')
  }
  constructor(private dataSource: DataSource) {}
}
