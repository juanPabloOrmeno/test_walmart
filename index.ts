import Server from "./classes/server";
import bodyParser from 'body-parser';
import { connectMongo } from "./classes/mongo";


import cors from 'cors';
import productoRouter from "./routes/productos.Routes";

const server = new Server();

//cors
server.app.use( cors({ origin: true, credentials: true }));

//body parse
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json());



//rutas
server.app.use( '/productos', productoRouter);





//conectar bd
connectMongo();


//levanta espress
server.start();