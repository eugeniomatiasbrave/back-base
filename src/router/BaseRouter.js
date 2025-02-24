// BaseRouter.js es un custom router que se encarga de manejar las rutas de la aplicacion.
// Es un router acoplado a mis necesidades, y un modelo estandarizado a nivel proyecto.
// Nos ayuda a estandarizar nuestras peticiones, el uso del router.
// Tambien podria estandarizar las respuestas, los errores, los mensajes de error.

import { Router } from "express";
import { passportCall } from "../middlewares/passportCall.js";
import { executePolicies } from "../middlewares/policies.js";

export default class BaseRouter {

	constructor(){
		this.router = Router();
		this.init();
	}

	init(){};

	getRouter(){
		return this.router;
	}

	get(path,policies,...callbacks){ // ...callback es un spread operator, no se cuantos callbacks voy a recibir. Pero estos callbacks estan descontextualizados
		if(!policies || !Array.isArray(policies)) throw new Error("Policies required for endpoint" + path); // protejo el codigo de que no me pasen un policies que no sea un array cundo desarrollo el codigo.
		this.router.get(path, this.generateCustomResponses, passportCall('current'),executePolicies(policies), this.applyCallbacks(callbacks));
	}
	post(path,policies,...callbacks){ // ...callback es un spread operator, no se cuantos callbacks voy a recibir. Pero estos callbacks estan descontextualizados
		if(!policies || !Array.isArray(policies)) throw new Error("Policies required for endpoint" + path); // protejo el codigo de que no me pasen un policies que no sea un array cundo desarrollo el codigo.
		this.router.post(path, this.generateCustomResponses, passportCall('current'),executePolicies(policies), this.applyCallbacks(callbacks));
	}
	put(path,policies,...callbacks){ // ...callback es un spread operator, no se cuantos callbacks voy a recibir. Pero estos callbacks estan descontextualizados
		if(!policies || !Array.isArray(policies)) throw new Error("Policies required for endpoint" + path); // protejo el codigo de que no me pasen un policies que no sea un array cundo desarrollo el codigo.
		this.router.put(path, this.generateCustomResponses, passportCall('current'),executePolicies(policies), this.applyCallbacks(callbacks));
	}
	delete(path,policies,...callbacks){ // ...callback es un spread operator, no se cuantos callbacks voy a recibir. Pero estos callbacks estan descontextualizados
		if(!policies || !Array.isArray(policies)) throw new Error("Policies required for endpoint" + path); // protejo el codigo de que no me pasen un policies que no sea un array cundo desarrollo el codigo.
		this.router.delete(path, this.generateCustomResponses, passportCall('current'),executePolicies(policies), this.applyCallbacks(callbacks));
	}

// Tambien podria estandarizar las respuestas, los errores, los mensajes de error.
	//ESTANDARIZANDO LAS RESPUESTAS, LOS ERRORES, LOS MENSAJES DE ERROR
	generateCustomResponses(req,res,next){
        res.sendSuccess = (data) => res.status(200).send({status:"success",data});
        res.sendBadRequest = (reason) => res.status(400).send({status:"success",error:reason});
        res.sendUnauthorized = (reason) => res.status(401).send({status:"error",error:reason||"Unauthorized"})
        next();
    }
	// ejecutar los middlewares dento de un contexto compartido.
	// conectar y relacionar contextualizando los callbacks
	applyCallbacks(callbacks){
		return callbacks.map((callback) => async (...params) => {
			//dentro ya tiene lo paramas req, res, next
			try{
				await callback.apply(this,params);// aplico el callback con los parametros que recibo
			}
			catch(error){
				params[1].status(500).send({ status:'error', error:`${error.name} ${error.message}`});
			} // params[1] es el res
		})
	}
	
}

