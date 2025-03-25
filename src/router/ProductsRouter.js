import BaseRouter from "./BaseRouter.js";
import productController from "../controllers/products.controller.js";
import { productValidator } from "../middlewares/validate.js"; // Importa el middleware de validación

class ProductsRouter extends BaseRouter {
	
	init(){
		this.get('/', ['PUBLIC','USER'], productController.getProducts);
        this.get('/:id', ['PUBLIC','USER'], productController.getProductById); // podra tener respuesta el publico como  aquellos con rol user.
        this.post('/', ['PUBLIC'], productValidator, productController.createProduct);
        this.put('/:id', ['ADMIN'], productController.updateProduct);
        this.delete('/:id', ['ADMIN'], productController.deleteProduct);
	}
}

const productsRouter = new ProductsRouter();
export default productsRouter.getRouter(); // exporto una instancia de ProductsRouter().getRouter() para que sea un objeto instanciado y no una clase.

