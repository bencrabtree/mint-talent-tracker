import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("character varying")
    first_name: string;

    @Column("character varying")
    last_name: string;

    @Column("character varying")
    email: string;

    @Column("character varying")
    photo_uri: string;

    @Column("character varying")
    role: string;

    @Column("character varying")
    title: string;
}
