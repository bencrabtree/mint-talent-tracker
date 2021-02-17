import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from "typeorm";
import { User } from ".";

@Entity()
export class Lead extends BaseEntity {

    constructor(client, user) {
        super();

        this.client_id = client;
        this.user_id = user;
        this.updated_by = user;
        this.created_on = new Date();
        this.updated_on = new Date();
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column("integer")
    client_id: number;

    @Column("integer", { array: true })
    @OneToMany(type => User, user => user.id)
    user_id: number[];

    @Column("character varying")
    status: string;

    @Column("timestamp without time zone")
    created_on;

    @Column("timestamp without time zone")
    updated_on;

    @Column("integer")
    @ManyToOne(type => User, user => user.id)
    updated_by: number;

    updateStatus(status, user_id) {
        this.updated_by = user_id;
        this.status = status;
        this.updated_on = new Date();
    }
}
