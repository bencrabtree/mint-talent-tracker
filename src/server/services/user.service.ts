import { getRepository } from 'typeorm';
import { User, Client, Lead } from '../dao';

export default class UserService {
    constructor() {}

    //
    getUserByEmail = async (email: string): Promise<User> => {
        try {
            let user: User = await getRepository(User).findOne(email);
            return user;
        } catch (err) {
            console.log('UserService, getUserByEmail:', err)
        }
    }

    //
    getUserById = async (id: number): Promise<User> => {
        try {
            let user: User = await getRepository(User).findOne(id);
            return user;
        } catch (err) {
            console.log('UserService, getUserById:', err)
        }
    }

    //


}