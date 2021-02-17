import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { Photo, Tag } from '.';

@Entity()
export class Client extends BaseEntity {

    constructor(params?) {
        super();

        if (params) {
            this.full_name = params.full_name;
            this.photo_uri = params.photo_uri;
            this.description = params.description;
            this.contact = params.contact;
            this.contact_email = params.contact_email;
            this.collection = params.collection.map(photo => new Photo(photo).id);
            this.description_short = params.description_short;
            this.website = params.website;
            this.twitter = params.twitter;
            this.facebook = params.facebook;
            this.apple_music = params.apple_music;
            this.spotify = params.spotify;
            this.snapchat = params.snapchat;
            this.instagram = params.instagram;
            this.soundcloud = params.soundcloud;
            this.tiktok = params.tiktok;
            this.youtube = params.youtube;
            this.tags = params.tags.map(tag => new Tag(tag).id);
        }
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, type: "character varying" })
    full_name: string;

    @Column({ nullable: true, type: "character varying" })
    contact: string;

    @Column({ nullable: true, type: "character varying" })
    contact_email: string;

    @Column({ nullable: true, type: "character varying" })
    photo_uri: string;

    @Column("integer", { nullable: true, array: true })
    @OneToMany(type => Photo, photo => photo.id)
    collection: number[];

    @Column({ nullable: true, type: "character varying" })
    description: string;

    @Column({ nullable: true, type: "character varying" })
    description_short: string;

    @Column({ nullable: true, type: "character varying" })
    website: string;

    @Column({ nullable: true, type: "character varying" })
    twitter: string;

    @Column({ nullable: true, type: "character varying" })
    instagram: string;

    @Column({ nullable: true, type: "character varying" })
    facebook: string;

    @Column({ nullable: true, type: "character varying" })
    snapchat: string;

    @Column({ nullable: true, type: "character varying" })
    spotify: string;

    @Column({ nullable: true, type: "character varying" })
    apple_music: string;

    @Column({ nullable: true, type: "character varying" })
    soundcloud: string;

    @Column({ nullable: true, type: "character varying" })
    tiktok: string;

    @Column({ nullable: true, type: "character varying" })
    youtube: string;

    @Column("character varying", { nullable: true, array: true })
    @OneToMany(type => Tag, tag => tag.name)
    tags: string[];

    toEditableArray() {
        const values = Object.keys(this);
        return values.map(val => ({
            id: val,
            data: this[val] || ((val === 'tags' || val === 'collection') ? [] : "")
        }));
    }
}
