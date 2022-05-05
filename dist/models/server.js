"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Como utilizamos exportación por defecto solo se usa el nombre que queramos
const usuario_1 = __importDefault(require("../routes/usuario"));
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
    constructor() {
        this.apiPaths = {
            usuarios: "/api/usuarios"
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8080";
        //rutas- Definir mis rutas
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto" + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map