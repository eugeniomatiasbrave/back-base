import { usersServices } from "../services/indexRepositories.js"; // Importa el servicio de usuarios

const getUsers = async (req, res) => {
    try {
        const users = await usersServices.getUsers();
        res.sendSuccess(users);
    } catch (error) {
        res.sendServerError('Internal server error');
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await usersServices.getUserBy({ _id: req.params.id });
        if (!user) {
            return res.sendNotFound('User not found');
        }
        res.sendSuccess(user);
    } catch (error) {
        res.sendServerError('Internal server error');
    }
};

const getUserByEmail = async (req, res) => {
    try {
        const user = await usersServices.getUserBy({ email: req.params.email });
        if (!user) {
            return res.sendNotFound('User not found');
        }
        res.sendSuccess(user);
    } catch (error) {
        res.sendServerError('Internal server error');
    }
}

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, birthDate, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.sendBadRequest('Incomplete values');
        }
        const user = await usersServices.getUserBy({ email });
        if (user) {
            return res.sendBadRequest('User already exists');
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
        res.sendSuccess(result);
    } catch (error) {
        res.sendServerError('Internal server error');
    }
}

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