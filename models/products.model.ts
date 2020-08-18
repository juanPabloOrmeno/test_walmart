import { Schema, model, Document } from 'mongoose'


const productsSchema = new Schema({

    id: {
        type: Number
    },
    brand: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    descuento:{
        type: Boolean,
        required: false
    }

});





interface IProducts extends Document{
    id: Number;
    brand: string;
    description: string;
    image: string;
    price: Number;
    descuento: boolean
}


export const Products = model<IProducts>('Products', productsSchema);