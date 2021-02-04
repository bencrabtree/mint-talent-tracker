import { getRepository } from 'typeorm';
import { User, Client, Lead } from '../entity';

export default class UserService {
    constructor() {}

    //
    getUserByEmail = async (email: string) => {
        try {
            let user: User = await getRepository(User).findOne(email);
            return user;
        } catch (err) {
            console.log('UserService, getUserByEmail:', err)
        }
    }

    //
    getUserById = async (id: number) => {
        try {
            let user: User = await getRepository(User).findOne(id);
            return user;
        } catch (err) {
            console.log('UserService, getUserById:', err)
        }
    }

    //


}