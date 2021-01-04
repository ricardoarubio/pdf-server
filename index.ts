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

var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('https://tciconsultoria.com/formatos/Formularios/1.arrendamientoDeSistemaGPS.php', 'utf8');
var options = { format: 'legal', orientation: "portrait", border: "2px" };

pdf.create(html, options).toFile('./formato2.pdf', function(err: any, res: any) {
    if (err) return console.log(err);
    console.log(res);  { filename: '/app/businesscard.pdf' }
});