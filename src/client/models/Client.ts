export default class Client {
    full_name: string;
    contactFirstName?: string;
    contactLastName?: string;
    contactEmail?: string;
    photoUri: string;
    description: string;
    website?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    snapchat?: string;
    spotify?: string;
    tiktok?: string;
    apple_music?: string;
    soundcloud?: string;
    youtube?: string;

    constructor(params) {
        if (params) {
            this.full_name = params.full_name;
            this.photoUri = params.photoUri;
            this.description = params.description;
        }
    }
}