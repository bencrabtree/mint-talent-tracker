import http from 'http';
import expressSession from 'express-session';
import app from './app';
import settings from './config/settings.json';

const start = async () => {
    let session = expressSession({
        secret: 'test',
        resave: false,
        saveUninitialized: false,
        unset: 'destroy'
    });

    const app_ = app(settings, session);
    let server = http.createServer(app_);

    server.listen(settings.port || 3000, () => {
        console.log(`\nRunning on port ${settings.port}`);
        console.log(`--------------------------\n`)
    })
}

start();