import { Router, Request, Response } from "express";
import { Products } from "../models/products.model";



const productoRouter = Router();



//ver productos
productoRouter.get('/', async (req: any, res: Response) => {

    const body = req.body;
    let query:any = {};
    
    query["activo"] = true;
   
    try{
        const response = await Products.find().exec();
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