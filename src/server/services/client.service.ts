import { User, Client, Lead } from '../entity';
import { getRepository } from "typeorm";

export default class ClientService {
    constructor() {}

    //
    getClientById = async (id: number) => {
        try {
            let client = await getRepository(Client).findOne(id);
            return client;
        } catch (err) {
            console.log('ClientService, getClientById:', err)
        }
    }
}