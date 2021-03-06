import http from 'http';
import expressSession from 'express-session';
import app from './app';
import settings from './config/settings.json';
import "reflect-metadata";
import { createConnection, ConnectionOptions, getRepository, createQueryBuilder } from "typeorm";
import { Client, Photo, Tag, User, Notes, Lead, File } from "../shared/dao";
import { s3Service } from './services/s3.service';

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
        entities: [ User, Client, Lead, Photo, Notes, Tag, File ],
        synchronize: true
    } as ConnectionOptions);

    await s3Service.initialize(settings.s3.url, settings.s3.accessKey, settings.s3.accessSecret, 'us-east-1')

    const _app = app(settings, session);
    const server = http.createServer(_app);

    server.listen(settings.port, () => {
        console.log(`\nRunning on port ${settings.port}`);
        console.log(`--------------------------\n`)
    })
}

start();