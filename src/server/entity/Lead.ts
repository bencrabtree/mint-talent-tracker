import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from "typeorm";
import { User } from ".";

@Entity()
export class Lead extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("integer")
    client_id: number;

    @Column("integer", { array: true })
    @ManyToOne(type => User, user => user.id)
    user_id: number[];

    @Column("character varying")
    status: string;

    @Column("timestamp without time zone")
    created_on;

    @Column("timestamp without time zone")
    updated_on;

    @Column("integer")
    @OneToMany(type => User, user => user.id)
    updated_by: number;
}
