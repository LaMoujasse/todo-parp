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
    userID : User

    @OneToMany(() => Card, (card) => card.colonneID, {nullable: false}) 
    cardID : Card
}