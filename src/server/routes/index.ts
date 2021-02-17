import express, { Router } from 'express';
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
import cors from 'cors';
import { isAuth } from '../auth/authCheck';
import ClientController from '../controllers/ClientController';
import TagController from '../controllers/TagController';
import UserController from '../controllers/UserController';
import { clearUsersession } from '../auth/passport';

export default (app, googleAuth) => {
    const router = Router();

    app.use((req, res, next) => {
        // res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });
    app.use(cors());
    app.use(cookieParser());
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.use(googleAuth.initialize());
    app.use(googleAuth.session());
    app.get('*', isAuth);
    app.use(express.static(path.join(__dirname, "../public")));
    //////////////////////////// AUTH ROUTES
    router.get('/auth/signin', 
        (req, res, next) => {
            try {
                googleAuth.authenticate('google', { scope : ['profile', 'email'] })(req, res, next)
            } catch (error) {
                console.log(error)
            }
        }
    );
    
    router.get('/auth/callback', 
        (req, res, next) => {
            try {
                googleAuth.authenticate('google', { failureRedirect: '/auth/error' })(req, res, next)
            } catch (error) {
                console.log('callback error', error)
            }
        },
        (req, res) => res.redirect('/home')
    );

    router.get('/auth/signout',
        (req, res) => {
            console.log('Signing Out');
            clearUsersession();
            req.logout();
            res.redirect("/auth/isLoggedOut");
        }
    )
    ////////////////////////////

    router.get('/roster/all', isAuth, ClientController.getFullRoster);
    router.put('/roster/new', isAuth, ClientController.addClient);
    router.get('/roster/new-lead-model', isAuth, ClientController.getNewLeadModel);

    router.get('/tags/all', isAuth, TagController.getAll);

    router.get('/user/current', isAuth, UserController.getLoggedInUser)

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