import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Colonne } from './colonne.entity';
import { List } from './list.entity';

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    title: string;

    @Column({
        nullable: false
    })
    description: string;

    @ManyToOne(() => Colonne, (colonne) => colonne.id, {nullable: false})
    colonne : Colonne;

    @OneToMany(() => List, (list) => list.card, {nullable: false})
    lists : List[];
}