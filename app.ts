import dotenv from "dotenv";
import Server from "./models/server";
//Usar config por defecto y establecer variables de entorno dotenv
dotenv.config();

const server = new Server();

server.listen();