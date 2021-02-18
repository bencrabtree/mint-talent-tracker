import express, { Router } from 'express';
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
import auth from './auth';
import cors from 'cors';
import { isAuth } from '../auth/authCheck';
import ClientController from '../controllers/ClientController';
import TagController from '../controllers/TagController';
import UserController from '../controllers/UserController';

export default (app, passport) => {
    const router = Router();

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        // res.header('Content-Type', 'text/plain')
        next();
    });
    app.use(cookieParser());
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.use(passport.initialize());
    app.use(passport.session());
    // app.get('*', isAuth);
    app.use(cors({ origin: true, credentials: true }));
    app.use(express.static(path.join(__dirname, "../public")));
    //////////////////////////// AUTH ROUTES
    const authRoutes = auth(passport);
    app.use('/auth', authRoutes);
    ////////////////////////////

    router.get('/roster/all', ClientController.getFullRoster);
    router.put('/roster/new', passport.authenticate('jwt', { session: false }), ClientController.addClient);
    router.get('/roster/new-lead-model', passport.authenticate('jwt', { session: false }), ClientController.getNewLeadModel);

    router.get('/tags/all', TagController.getAll);

    router.get('/user/current', UserController.getLoggedInUser)

    ////////////////////////////
    app.use('/', router);
    app.get('*/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'),
        error => {
            if (error) {
                console.log('Error Sending html');
                res.status(500).send(error)
            }
        })
    })
}