import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, Generated } from 'typeorm';
import { User } from './user.entity';
import { Card } from './card.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Colonne {
    @PrimaryGeneratedColumn()
    @Exclude()
    id: number;

    @Column({
        nullable: false
    })
    @Generated('uuid')
    uuid: string;

    @CreateDateColumn()
    @Exclude()
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