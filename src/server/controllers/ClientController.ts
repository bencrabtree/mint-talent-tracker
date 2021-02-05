import { Request, Response } from 'express';
import { clientService } from '../services/client.service';

const getFullRoster = async (req: Request, res: Response) => {
    try {
        let fullRoster = await clientService.getAll();
        res.status(200).send(fullRoster);
    } catch (error) {
        console.log("ClientController: GetFullRoster:", error);
        res.status(400).send("Unable to get full roster");
    }
}

const addClient = async (req: Request, res: Response) => {
    try {
        let client = await clientService.addClient(req.body.client);
        res.status(200).send(client);
    } catch (error) {
        console.log("ClientController: AddClient:", error);
        res.status(400).send(`Unable to add ${req.body?.client?.firstName || 'client'}`)
    }
}

export default {
    getFullRoster,
    addClient
}