import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Colonne } from './colonne.entity';
import { List } from './list.entity';

@Entity()
export class Card {
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

    @Column({
        nullable: false
    })
    description: string;

    @ManyToOne(() => Colonne, (colonne) => colonne.id, {nullable: false})
    colonne : Colonne;

    @OneToMany(() => List, (list) => list.card, {nullable: false})
    lists : List[];
}