import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Colonne } from './colonne.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  upateDate: Date;

  @Column({
    nullable : false
  })
  username: string;

  @Exclude()
  password: string;

  @Column({
    nullable : false
  })
  email: string;

  @OneToMany(() => Colonne, (colonne) => colonne.user, {nullable: false}) 
  colonnes : Colonne[];
}