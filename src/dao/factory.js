import mongoose from 'mongoose';
import { initMySql } from './mySql/connection.js';
import config from '../config/config.env.js';
import UserDaoFileSystem from './fileSystem/userDao.js';
import ProductDaoFileSystem from './fileSystem/productDao.js';
import UserDaoMongo from './mongo/userDao.js';
import ProductDaoMongo from './mongo/productDao.js';
import UserDaoMySql from './mySql/userDao.js';
import ProductDaoMySql from './mySql/productDao.js';

const URL = config.mongo.URL;

export default class PersistenceFactory {
    async selectPersistence(persistence) {
        switch (persistence) {
            case "FILESYSTEM": {
                return {
                    userDao: new UserDaoFileSystem(),
                    productDao: new ProductDaoFileSystem()
                };
            }
            case 'MONGO': {
                await mongoose.connect(URL);
                return {
                    userDao: new UserDaoMongo(),
                    productDao: new ProductDaoMongo()
                };
            }     
            case 'MYSQL': 
                default: {
                await initMySql();
                return {
                  userDao: new UserDaoMySql(),
                  productDao: new ProductDaoMySql()
                };
            }
        }
    }
}

// cambio de persistencia llendo a .env y cambiando PERSISTENCE a FILESYSTEM
// cambio de persistencia llendo a .env y cambiando PERSISTENCE a MONGO