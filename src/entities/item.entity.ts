import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { List } from './list.entity';

@Entity()
export class Item {
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
    finish: boolean;

    @ManyToOne(() => List, (list) => list.id, {nullable: false})
    list : List;
}