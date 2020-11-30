import Server from "./classes/Server";
import  router  from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

//bodyParser
server.app.use( bodyParser.urlencoded( { extended: true } ) );
server.app.use( bodyParser.json() );

//cors
server.app.use( cors({ origin: true, credentials: true }) );

//rutas
server.app.use('/', router );


server.start( () => {
    console.log(`servidor iniciado en el puerto ${ server.port }`);
});