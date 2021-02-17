import { User, Client, Lead } from '../../shared/dao';
import { getRepository } from "typeorm";

class ClientService {
    constructor() {}

    //
    getAll = async (): Promise<Client[]> => {
        try {
            let roster = await getRepository(Client).find();
            return roster;
        } catch (error) {
            console.log("ClientService: GetAll:", error);
            return null;
        }
    }

    //
    getClientById = async (id: number): Promise<Client> => {
        try {
            let client = await getRepository(Client).findOne(id);
            return client;
        } catch (error) {
            console.log('ClientService: GetClientById:', error);
            return null;
        }
    }

    //
    removeClientById = async (id: number): Promise<void> => {
        try {
            let client = await getRepository(Client).findOne(id);
            await getRepository(Client).remove(client);
        } catch (error) {
            console.log("ClientService: RemoveClientById:", error);
            return null;
        }
    }

    //
    addClient = async (client: object): Promise<Client> => {
        try {
            console.log(client)
            let clientToAdd = new Client(client);
            await getRepository(Client).save(clientToAdd);
            return clientToAdd;
        } catch (error) {
            console.log('ClientService: AddClient:', error);
            return null;
        }
    }

    //
    getModel = async () => {
        try {
            let clientModel = new Client();
            return clientModel.toEditableArray()
        } catch (error) {
            console.log("ClientService: GetModel:", error);
            return null;
        }
    }
}

export const clientService = new ClientService();