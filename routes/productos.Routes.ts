import { Router, Request, Response } from "express";
import { Products } from "../models/products.model";



const productoRouter = Router();



//ver productos
productoRouter.post('/', async (req: any, res: Response) => {

    const body = req.body;
    let producto: any = body.producto
    let query: any

    if(!isNaN(producto))
        query =  {"id": producto } 
    else
        query =   {$or:[{"brand": { "$regex": producto, "$options": "i" }},
                        {"description": { "$regex": producto, "$options": "i" }}
                        ]}


    try{
        const response = await Products.find(query).exec();
        res.status(200).send({
            status:true,
            response: response,
        });

    }catch(e){
        res.status(500).json({
            status:false,
            error: e
        })
    }
});


export default productoRouter;