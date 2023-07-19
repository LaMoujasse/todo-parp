import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Card } from './card.entity';
import { Item } from './item.entity';

@Entity()
export class List {
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

    @ManyToOne(() => Card, (card) => card.id, {nullable: false})
    card : Card;

    @OneToMany(() => Item, (item) => item.list, {nullable: false} )
    items : Item[];
}