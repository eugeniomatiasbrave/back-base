import { ProductModel } from "./models/product.model.js";

export default class ProductDao {
    async get() {
        return await ProductModel.findAll();
    }

    async getById(id) {
        return await ProductModel.findByPk(id);
    }

    async create(product) {
        return await ProductModel.create(product);
    }

    async update(id, product) {
        return await ProductModel.update(product, { where: { id } });
    }

    async delete(id) {
        return await ProductModel.destroy({ where: { id } });
    }
}