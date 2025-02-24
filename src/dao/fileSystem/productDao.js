import fs from 'fs';
import __dirname from '../../utils.js';

const PATH = `${__dirname}/dao/fileSystem/products.json`;


class ProductDao {

      constructor() {
        this.init();
   }

   async init() {

    if (fs.existsSync(PATH)) {
            //si ya existe el archivo no hace nada...
            console.log('Ya existe el archivo products.json');
        } else {
            try {
              await fs.promises.writeFile(PATH, JSON.stringify([]), 'utf-8')	
            } catch (error) { // si algo sale mal
                console.log('Error al crear el archivo', error);
                process.exit(1); // aca corta el servidor y el proceso de crear el archivo si hay un error
            }
        }
       }; // fin del init

    async get() {
        const data = await fs.promises.readFile(PATH, 'utf-8');
        return JSON.parse(data);
    }

    async getById(id) {
        const products = await this.get();
        return products.find(product => product.id === id);
    }

    async create(product) {
        const products = await this.get();
        products.push(product);
        await fs.promises.writeFile(PATH, JSON.stringify(products, null, 2));
        return product;
    }

    async update(id, updatedProduct) {
        const products = await this.get();
        const index = products.findIndex(product => product.id === id);
        if (index === -1) {
            throw new Error('Product not found');
        }
        products[index] = { ...products[index], ...updatedProduct };
        fs.writeFile(filePath, JSON.stringify(products, null, 2));
        return products[index];
    }

    async delete(id) {
        const products = await this.get();
        const filteredProducts = products.filter(product => product.id !== id);
        fs.writeFile(filePath, JSON.stringify(filteredProducts, null, 2));
        return { id };
    }
}


export default ProductDao;