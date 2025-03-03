import { productsService } from "../services/indexRepositories.js"; // import the productsService from the indexRepositories.js file
import logger from '../config/log4js.config.js'; // import the logger from the log4js.config.js file
import { BadRequestError } from '../utils/customError.js'; // import the custom errors
import HttpRes from '../utils/httpResponse.js'; // Importa la clase de respuesta HTTP

const getProducts = async (req, res, next) => {
    try {
        const products = await productsService.getProducts();
        HttpRes.Success(res, products); // Use the Success method from the HttpRes class to send the 
    } catch (error) {
        logger.error('Error retrieving products:', error);
        next(error); // Pasa el error al manejador de errores
    }
};

const createProduct = async (req, res, next) => {
    try {
        const { name, description, price } = req.body;
        if (!name || !description || !price) {
            logger.warn('Incomplete values for product creation');
            throw new BadRequestError('Incomplete values for product creation'); // Pasa el error al manejador de errores
        }
        const product = { name, description, price };
        const newProduct = await productsService.createProduct(product);
        HttpRes.Created(res, newProduct); // Use the Created method from the HttpRes class to send the
    } catch (error) {
        logger.error('Error creating product:', error);
        next(error); // Pasa el error al manejador de errores
    }
};

const getProductById = async (req, res) => {};
const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {};

export default { // export an object with all the methods
    getProducts,
    getProductById,
    createProduct, // add createProduct to the export object
    updateProduct,
    deleteProduct
};