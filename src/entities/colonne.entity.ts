import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { Card } from './card.entity';

@Entity()
export class Colonne {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    creationDate: Date;

    @UpdateDateColumn()
    upateDate: Date;

    @Column({
        nullable: false
    })
    title: string;

    @ManyToOne(() => User, (user) => user.id, {nullable: false})
    user : User;

    @OneToMany(() => Card, (card) => card.colonne, {nullable: false}) 
    cards : Card[];
}