import express from 'express';
import routes from './routes';

export default (settings: any, session: any) => {
    let server = express();
    server.use(session);
    routes(server, settings);
    return server;
}