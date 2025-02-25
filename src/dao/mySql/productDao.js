import { ProductModel } from "./models/product.model.js";

export default class ProductDao {
    async get() {
        try {
            return await ProductModel.findAll();
        } catch (error) {
            console.error('Error in get:', error);
            throw new Error('Failed to get products');
        }
    }

    async getById(id) {
        try {
            return await ProductModel.findByPk(id);
        } catch (error) {
            console.error('Error in getById:', error);
            throw new Error('Failed to get product by ID');
        }
    }

    async create(product) {
        try {
            return await ProductModel.create(product);
        } catch (error) {
            console.error('Error in create:', error);
            throw new Error('Failed to create product');
        }
    }

    async update(id, product) {
        try {
            return await ProductModel.update(product, { where: { id } });
        } catch (error) {
            console.error('Error in update:', error);
            throw new Error('Failed to update product');
        }
    }

    async delete(id) {
        try {
            return await ProductModel.destroy({ where: { id } });
        } catch (error) {
            console.error('Error in delete:', error);
            throw new Error('Failed to delete product');
        }
    }
}