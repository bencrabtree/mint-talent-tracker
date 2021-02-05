import express, { Router } from 'express';
const path = require("path");
import ClientController from '../controllers/ClientController';

export default (app, settings) => {
    const router = Router();

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    ////////////////////////////

    router.get('/roster/all', ClientController.getFullRoster);
    router.put('/roster/add', ClientController.addClient)

    ////////////////////////////
    app.use(express.static(path.join(__dirname, "../public")));
    app.use('/', router);
}