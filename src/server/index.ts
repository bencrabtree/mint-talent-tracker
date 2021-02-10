import http from 'http';
import expressSession from 'express-session';
import app from './app';
import settings from './config/settings.json';
import "reflect-metadata";
import { createConnection, ConnectionOptions, getRepository, createQueryBuilder } from "typeorm";
import { Client, Photo, Tag, User, Notes, Lead } from "./dao";

const start = async () => {
    let session = expressSession({
        secret: 'test',
        resave: false,
        saveUninitialized: false,
        unset: 'destroy'
    });

    await createConnection({
        type: "postgres",
        port: settings.db.port,
        username: settings.db.username,
        database: settings.db.name,
        password: settings.db.password,
        host: settings.db.endpoint,
        entityPrefix: settings.db.schema + '.',
        entities: [ User, Client, Lead, Photo, Notes, Tag ],
        synchronize: true
    } as ConnectionOptions);

    const app_ = app(settings, session);
    let server = http.createServer(app_);

    server.listen(settings.port, () => {
        console.log(`\nRunning on port ${settings.port}`);
        console.log(`--------------------------\n`)
    })
}

start();