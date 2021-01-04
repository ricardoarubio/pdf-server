"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./classes/Server"));
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = new Server_1.default();
//bodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
//rutas
server.app.use('/', router_1.default);
server.start(() => {
    console.log(`servidor iniciado en el puerto ${server.port}`);
});
var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('https://tciconsultoria.com/formatos/Formularios/1.arrendamientoDeSistemaGPS.php', 'utf8');
var options = { format: 'legal', orientation: "portrait", border: "2px" };
pdf.create(html, options).toFile('./formato2.pdf', function (err, res) {
    if (err)
        return console.log(err);
    console.log(res);
    {
        filename: '/app/businesscard.pdf';
    }
});
