export default class Client {
    firstName: string;
    lastName: string;
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
    apple_music?: string;
    soundcloud?: string;
    youtube?: string;

    constructor(params) {
        if (params) {
            this.firstName = params.firstName;
            this.lastName = params.lastName;
            this.photoUri = params.photoUri;
            this.description = params.description;
        }
    }
}