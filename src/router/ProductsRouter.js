import BaseRouter from "./BaseRouter.js";
import productController from "../controllers/products.controller.js";

class ProductsRouter extends BaseRouter {
	
	init(){
		this.get('/', ['PUBLIC','USER'], productController.getProducts);
        this.get('/:id', ['PUBLIC','USER'], productController.getProductById); // podra tener respuesta el publico como  aquellos con rol user.
        this.post('/', ['PUBLIC'], productController.createProduct);
        this.put('/:id', ['ADMIN'], productController.updateProduct);
        this.delete('/:id', ['ADMIN'], productController.deleteProduct);
	}
}

const productsRouter = new ProductsRouter();
export default productsRouter.getRouter(); // exporto una instancia de ProductsRouter().getRouter() para que sea un objeto instanciado y no una clase.

