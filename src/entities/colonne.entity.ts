import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Card } from './card.entity';

@Entity()
export class Colonne {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    title: string;

    @ManyToOne(() => User, (user) => user.id, {nullable: false})
    user : User

    @OneToMany(() => Card, (card) => card.colonne, {nullable: false}) 
    card : Card
}