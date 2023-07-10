import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Colonne } from './colonne.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable : false
  })
  username: string;

  @Column({
    nullable : false
  })
  password: string;

  @Column({
    nullable : false
  })
  email: string;

  @OneToMany(() => Colonne, (colonne) => colonne.userID, {nullable: false}) 
  colonne : Colonne
}