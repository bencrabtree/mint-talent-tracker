import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from "typeorm";
import { Tag } from ".";

@Entity()
export class Photo extends BaseEntity {

    constructor(key, alt_text?) {
        super();

        this.key = key;
        this.alt_text = alt_text || "";
        this.upload_date = new Date();
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column("character varying")
    key: string;

    @Column("character varying")
    alt_text: string;

    @Column("timestamp without time zone")
    upload_date;

    @Column("character varying", { nullable: true, array: true })
    @OneToMany(type => Tag, tag => tag.name)
    tags: number[];
}
