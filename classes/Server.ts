import express from 'express';
import { PORT } from '../global/enviroment';

export default class Server{
    public app:express.Application;
    public port:number;

    constructor(){
        this.app = express();
        this.port = PORT;
    }

    start( callback:() => void){
        this.app.listen(this.port, callback);
    }
} 