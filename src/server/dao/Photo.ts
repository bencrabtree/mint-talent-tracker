import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Photo extends BaseEntity {

    constructor(file_path, alt_text?) {
        super();

        this.file_path = file_path;
        this.alt_text = alt_text || "";
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column("character varying")
    alt_text: string;

    @Column("character varying")
    file_path: string;
}
