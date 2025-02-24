import UsersRepository from "./repositories/UsersRepository.js";
import ProductsRepository from "./repositories/ProductsRepository.js"; // Importa ProductsRepository

import PersistenceFactory from "../dao/factory.js";
import config from "../config/config.env.js";

const factory = new PersistenceFactory();
const loadedEntities = await factory.selectPersistence(config.app.PERSISTENCE);

export const usersServices = new UsersRepository(loadedEntities.userDao);
export const productsService = new ProductsRepository(loadedEntities.productDao);