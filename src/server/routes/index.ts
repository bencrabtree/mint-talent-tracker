import express, { Router } from 'express';
const path = require("path");

export default (app, settings) => {
    const router = Router();

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    ////////////////////////////

    

    ////////////////////////////
    app.use(express.static(path.join(__dirname, "../public")));
    app.use('/', router);
}