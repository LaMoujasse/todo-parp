import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Colonne } from './colonne.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable : false
  })
  username: string;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @Column({
    nullable : false
  })
  password: string;

  @Column({
    nullable : false
  })
  email: string;

  @OneToMany(() => Colonne, (colonne) => colonne.user, {nullable: false}) 
  colonnes : Colonne[];
}