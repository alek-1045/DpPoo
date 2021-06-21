import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import Responsavel from "./responsav";

@Entity('despesas')

export default class Despesas {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @CreateDateColumn()
    datadacompra: Date;

    @Column()
    localdacompra: string;

    @Column()
    valor: string;

    @Column()
    id_responsavel: number;

    @ManyToOne(() => Responsavel)
    @JoinColumn({name: 'id_responsavel'})
    responsavel: Responsavel;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}