import productModel from "./models/product.model.js"; // import the productModel from the product.model.js file

export default class ProductDao { // create a class called ProductDao to interact with the productModel collection in the database 

    get = async () => {
        try {
            return await productModel.find();
        } catch (error) {
            console.error('Error in get:', error);
            throw new Error('Failed to get products');
        }
    }

    getById = async (id) => {
        try {
            return await productModel.findById(id);
        } catch (error) {
            console.error('Error in getById:', error);
            throw new Error('Failed to get product by ID');
        }
    }

    create = async (product) => {  // product is an object with name, description and price
        try {
            return await productModel.create(product); // create is a mongoose method
        } catch (error) {
            console.error('Error in create:', error);
            throw new Error('Failed to create product');
        }
    }

    update = async (id, updatedProduct) => {
        try {
            return await productModel.findByIdAndUpdate(id, updatedProduct, { new: true });
        } catch (error) {
            console.error('Error in update:', error);
            throw new Error('Failed to update product');
        }
    }

    delete = async (id) => {
        try {
            return await productModel.findByIdAndDelete(id);
        } catch (error) {
            console.error('Error in delete:', error);
            throw new Error('Failed to delete product');
        }
    }
}