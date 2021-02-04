import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { Collection } from '.';

@Entity()
export class Client extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("character varying")
    first_name: string;

    @Column("character varying")
    last_name: string;

    @Column("character varying")
    contact_first_name: string;

    @Column("character varying")
    contact_last_name: string;

    @Column("character varying")
    contact_email: string;

    @Column("character varying")
    photo_uri: string;

    @Column("integer", { array: true })
    @ManyToOne(type => Collection, photo => photo.client_id)
    collection: number[];

    @Column("character varying")
    description: string;

    @Column("character varying")
    description_short: string;

    @Column("character varying")
    website: string;

    @Column("character varying")
    twitter: string;

    @Column("character varying")
    instagram: string;

    @Column("character varying")
    facebook: string;

    @Column("character varying")
    snapchat: string;

    @Column("character varying")
    spotify: string;

    @Column("character varying")
    apple_music: string;

    @Column("character varying")
    soundcloud: string;

    @Column("character varying")
    youtube: string;

    @Column("character varying", { array: true })
    tags: string[];
}
