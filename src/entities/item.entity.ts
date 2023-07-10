import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { List } from './list.entity';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    title: string;

    @Column({
        nullable: false
    })
    finish: boolean;

    @ManyToOne(() => List, (list) => list.id, {nullable: false})
    listID : List
}