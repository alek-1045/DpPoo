import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('responsavel')

export default class Responsavel {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nomedoresponsavel:string;

    @Column()
    telefone: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}