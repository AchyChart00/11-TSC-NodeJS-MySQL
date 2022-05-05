import express, { Application } from "express";
//Como utilizamos exportación por defecto solo se usa el nombre que queramos
import userRoutes from "../routes/usuario";
import cors from "cors";

//Si tenemas más rutas en el mismo archivo no se puede hacer esta importación 
//con el mismo nombre
/* import router from "../router/usuario";
import router from "../router/Producto";
import router from "../router/Ventas";
import router from "../router/usuario"; */

//Para más simplicidad utilizamos un alias. * as
//import * as userRoutes from "../routes/usuario";

//export class Server
class Server {

    /* private app: express.Application; */

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: "/api/usuarios"
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8080";

        //Métodos iniciales del middleware
        this.middlewares();

        //rutas- Definir mis rutas
        this.routes();
    }

    //TODO Conectar Base de datos

    middlewares() {
        //cors
        this.app.use(cors());
        //Lectura del body o parseo del body
        this.app.use(express.json());
        //carpeta pública

        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto" + this.port);
        })
    }
}

export default Server;