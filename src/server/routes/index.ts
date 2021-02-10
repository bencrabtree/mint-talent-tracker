import express, { Router } from 'express';
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
import ClientController from '../controllers/ClientController';
import TagController from '../controllers/TagController';

export default (app, settings) => {
    const router = Router();

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(cookieParser());
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    ////////////////////////////

    router.get('/roster/all', ClientController.getFullRoster);
    router.put('/roster/new', ClientController.addClient);
    router.get('/roster/new-lead-model', ClientController.getNewLeadModel);

    router.get('/tags/all', TagController.getAll);

    ////////////////////////////
    app.use(express.static(path.join(__dirname, "../public")));
    app.use('/', router);
}