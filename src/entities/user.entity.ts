import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { Colonne } from './colonne.entity';

@Unique(['username','email'])
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

  @Column()
  password: string;

  @Column({
    nullable : false
  })
  email: string;

  @OneToMany(() => Colonne, (colonne) => colonne.user, {nullable: false}) 
  colonnes : Colonne[];
}