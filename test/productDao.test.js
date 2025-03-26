import { expect } from "chai"; // Importa la biblioteca Chai para las aserciones
import sinon from "sinon"; // Importa Sinon para crear stubs y mocks
import ProductDao from "../src/dao/mySql/productDao.js"; // Importa la clase ProductDao
import { ProductModel } from "../src/dao/mySql/models/product.model.js"; // Importa el modelo ProductModel
import { faker } from "@faker-js/faker"; // Importa Faker para generar datos falsos
import logger from '../src/config/log4js.config.js'

describe("ProductDao", () => { // Describe el conjunto de pruebas para ProductDao
  let productDao; // Variable para la instancia de ProductDao
  let sandbox; // Variable para el sandbox de Sinon

  beforeEach(() => { // Antes de cada prueba
    productDao = new ProductDao(); // Crea una nueva instancia de ProductDao
    sandbox = sinon.createSandbox(); // Crea un sandbox de Sinon
  });

  afterEach(() => { // Después de cada prueba
    sandbox.restore(); // Restaura el sandbox de Sinon
  });

  describe("create", () => { // Describe el conjunto de pruebas para el método create
    it("should create a new product", async () => { // Define una prueba específica
      const fakeProduct = { // Crea un producto falso usando Faker
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
      };

      const stub = sandbox.stub(ProductModel, "create").resolves(fakeProduct); // Crea un stub para el método create de ProductModel

      const result = await productDao.create(fakeProduct); // Llama al método create de ProductDao con el producto falso
      logger.info('result', result);

      expect(stub.calledOnce).to.be.true; // Verifica que el stub fue llamado una vez
      expect(stub.calledWith(fakeProduct)).to.be.true; // Verifica que el stub fue llamado con el producto falso
      expect(result).to.deep.equal(fakeProduct); // Verifica que el resultado es igual al producto falso
      expect(result).to.have.property('name', fakeProduct.name); // Verifica que el resultado tiene la propiedad 'name'
      expect(result).to.have.property('description', fakeProduct.description); // Verifica que el resultado tiene la propiedad 'description'
      expect(result).to.have.property('price', fakeProduct.price); // Verifica que el resultado tiene la propiedad 'price'
    });

    it("should handle errors during product creation", async () => { // Define una prueba para manejar errores
      const fakeProduct = { // Crea un producto falso usando Faker
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
      };

      const error = new Error("Database error");
      const stub = sandbox.stub(ProductModel, "create").rejects(error); // Crea un stub que rechaza con un error

      try {
        await productDao.create(fakeProduct); // Llama al método create de ProductDao con el producto falso
      } catch (err) {
        expect(stub.calledOnce).to.be.true; // Verifica que el stub fue llamado una vez
        expect(err.message).to.equal("Failed to create product"); // Verifica que el error es el esperado
      }
    });

    it("should validate input before creating a product", async () => { // Define una prueba para validar entradas
      const invalidProduct = { // Crea un producto inválido
        name: "",
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
      };

      try {
        await productDao.create(invalidProduct); // Llama al método create de ProductDao con el producto inválido
      } catch (err) {
        expect(err).to.be.an("error"); // Verifica que se lanzó un error
		expect(err.message).to.include("Failed to create product"); // Verifica que el mensaje de error es el esperado
      }
    });
  });
});