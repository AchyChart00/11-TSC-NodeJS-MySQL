import express, { Application } from "express";

//export class Server
class Server {

    /* private app: express.Application; */

    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8080";
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto" + this.port);
        })
    }
}

export default Server;