import { productsService } from "../services/indexRepositories.js"; // import the productsService from the indexRepositories.js file

const getProducts = async (req, res) => {
    try {
        const products = await productsService.getProducts();
        res.json(products);
    } catch (error) {
        console.error('Error in getProducts:', error);
        res.sendServerError('Failed to get products');
    }
};

const createProduct = async (req, res) => {
	try {
		const { name, description, price } = req.body; // get the product from the request body.
		
        const product = {
			name,
            description,
            price
        }; // create a product object with the name, description and price
		
        const newProduct = await productsService.createProduct(product); // create the product
        res.json(newProduct); // send the new product as a response
    } catch (error) {
		console.error('Error in createProduct:', error);
        res.sendServerError('Failed to create product');
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