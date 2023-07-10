import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Card } from './card.entity';
import { Item } from './item.entity';

@Entity()
export class List {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    title: string;

    @ManyToOne(() => Card, (card) => card.id, {nullable: false})
    cardID : Card

    @OneToMany(() => Item, (item) => item.listID, {nullable: false} )
    itemID : Item
}