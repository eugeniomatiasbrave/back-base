import mongoose from 'mongoose';
import config from '../config/config.env.js';
import UserDaoFileSystem from './fileSystem/userDao.js';
import ProductDaoFileSystem from './fileSystem/productDao.js';
import UserDaoMongo from './mongo/userDao.js';
import ProductDaoMongo from './mongo/productDao.js';

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

            case 'MONGO':
            default: {
                await mongoose.connect(URL);
                return {
                    userDao: new UserDaoMongo(),
                    productDao: new ProductDaoMongo()
                };
            }
        }
    }
}

// cambio de persistencia llendo a .env y cambiando PERSISTENCE a FILESYSTEM
// cambio de persistencia llendo a .env y cambiando PERSISTENCE a MONGO