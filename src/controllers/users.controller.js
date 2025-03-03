import { usersServices } from "../services/indexRepositories.js"; // Importa el servicio de usuarios
import logger from '../config/log4js.config.js'; // Importa el logger
import { NotFoundError, BadRequestError, ValidatorError } from '../utils/customError.js'; // Importa los errores personalizados
import HttpRes from '../utils/httpResponse.js'; // Importa la clase de respuesta HTTP

const getUsers = async (req, res, next) => {
    try {
        const users = await usersServices.getUsers();
        HttpRes.Success(res, users);
    } catch (error) {
        logger.error('Error retrieving users:', error);
        next(error); // Pasa el error al manejador de errores
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await usersServices.getUserBy({ _id: req.params.id });
        if (!user) {
            logger.warn(`User with id ${req.params.id} not found`);
            throw new NotFoundError('User not found'); // Pasa el error al manejador de errores
        }
        HttpRes.Success(res, user);
    } catch (error) {
        logger.error('Error retrieving user by id:', error);
        next(error); // Pasa el error al manejador de errores
    }
};

const getUserByEmail = async (req, res, next) => {
    try {
        const user = await usersServices.getUserBy({ email: req.params.email });
        if (!user) {
            logger.warn(`User with email ${req.params.email} not found`);
            throw new NotFoundError('User not found'); //
        }
        logger.info(`User with email ${req.params.email} retrieved successfully`);
        HttpRes.Success(res, user);
    } catch (error) {
        logger.error('Error retrieving user by email:', error);
        next(error); // Pasa el error al manejador de errores
    }
};

const createUser = async (req, res, next) => {
    try {
        const { firstName, lastName, email, birthDate, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            logger.warn('Incomplete values for user creation');
            throw new ValidatorError('Incomplete values for user creation'); 
        }
        const user = await usersServices.getUserBy({ email });
    
        if (user) { // verifico si el usuario ya existe
            logger.warn(`User with email ${email} already exists`);
            throw new BadRequestError('User already exists'); // Pasa el error al manejador de errores
        }

        let parsedDate;
        if (birthDate) {
            parsedDate = new Date(birthDate).toISOString();
        }
        const newUser = {
            firstName,
            lastName,
            email,
            birthDate: parsedDate,
            password
        };
        const result = await usersServices.createUser(newUser);
        HttpRes.Created(res, result);
    } catch (error) {
        logger.error('Error creating user:', error);
        next(error); // Pasa el error al manejador de errores
    }
};

const updateUser = async (req, res) => {};
const deleteUser = async (req, res) => {};

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail
}