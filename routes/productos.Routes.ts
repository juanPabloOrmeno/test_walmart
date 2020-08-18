import { Router, Request, Response } from "express";
import { Products } from "../models/products.model";

const productoRouter = Router();

//ver productos
productoRouter.post('/', async (req: any, res: Response) => {
    const body = req.body;
    let producto: any = body.producto
    let query: any

    if(!isNaN(producto))
        if(producto === '')
            query = {}
         else
            query =  {"id": producto } 
    else
        query = {$or:[
                    {"brand": { "$regex": producto, "$options": "i" }},
                    {"description": { "$regex": producto, "$options": "i" }}
                ]}

    try{
        const response = await Products.find(query).exec();
        let resultado  = response.map((p:any)=>{
            p.price = palindromo(p.brand)?p.price*0.5:p.price;
            p.descuento = palindromo(p.brand)
            return p
        })

        res.status(200).send({
            status:"true",
            response: resultado,
        });

    }catch(e){
        res.status(500).json({
            status:false,
            error: e
        })
    }
});




 function palindromo(cadena: string) {
    var x = cadena.length;
    var cadenaInvertida = "";
  
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }


    if(cadena === cadenaInvertida)
        return true
    else
        return false
  }


export default productoRouter;