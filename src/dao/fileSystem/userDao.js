import fs from 'fs';
import __dirname from '../../utils.js';

const PATH = `${__dirname}/dao/fileSystem/users.json`;


class UserDao {

      constructor() {
        this.init();
   }

   async init() {

    if (fs.existsSync(PATH)) {
        //si ya existe el archivo no hace nada...
        console.log('Ya existe el archivo users.json');
    } else {
        try {
          await fs.promises.writeFile(PATH, JSON.stringify([]), 'utf-8')	
        } catch (error) { // si algo sale mal
            console.log('Error al crear el archivo', error);
            process.exit(1); // aca corta el servidor y el proceso de crear el archivo si hay un error
        }
    }
   }; // fin del init

    get = async () => {
        const users = await fs.promises.readFile(PATH, 'utf-8');
        return JSON.parse(users);
    }

    getOne = async (params) => {
        const users = await this.get();
        return users.find(user => user.email === params.email);
    }

    create = async (user) => {
        const users = await this.get();
        users.push(user);
        await fs.promises.writeFile(PATH, JSON.stringify(users), 'utf-8');
        return user;
    }

    update = async (email, user) => {
        const users = await this.get();
        const index = users.findIndex(u => u.email === email);
        users[index] = user;
        await fs.promises.writeFile(PATH, JSON.stringify(users), 'utf-8');
        return user;
    }

    delete = async (email) => {
        const users = await this.get();
        const index = users.findIndex(u => u.email === email);
        users.splice(index, 1);
        await fs.promises.writeFile(PATH, JSON.stringify(users), 'utf-8');
    }

}

export default UserDao;