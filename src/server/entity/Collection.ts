import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from "typeorm";
import { Client } from ".";

@Entity()
export class Collection extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("integer")
    @ManyToOne(type => Client, client => client.id)
    client_id: number

    @Column("character varying")
    alt_text: string;

    @Column("character varying")
    file_path: string;
}
