import mongoose from 'mongoose';
import { URL_MONGO, USER_MONGO, PASS_MONGO, BASE_DATOS_MONGO } from '../global/environment';
const { MongoClient } = require('mongodb');


export const connectMongo = async () => {

    const config = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        user: USER_MONGO,
        pass: PASS_MONGO,
        useUnifiedTopology: true
    };
    try {

        mongoose.Promise = global.Promise;
        await mongoose.connect('mongodb://' + URL_MONGO + '/' + BASE_DATOS_MONGO, config);
        console.log('Base de datos conectada correctamente');
    } catch (e) {
        setTimeout(() => {
            console.log("Error en la conneccion con mongo - reintentando en 5 segundos");
            connectMongo();
        }, 5000);
    }
}








