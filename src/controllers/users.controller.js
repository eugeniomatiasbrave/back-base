import { usersServices } from "../services/indexRepositories.js"; // Importa el servicio de usuarios

const getUsers = async (req, res) => {
	try {
        const users = await usersServices.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getUserById = async (req, res) => {
	try {
        const user = await usersServices.getUserBy({ _id: req.params.id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getUserByEmail = async (req, res) => {
	try {
		const user = await usersServices.getUserBy({ email: req.params.email });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' });
	}
}

const createUser = async (req, res) => {
	try {
		const { firstName, lastName, email, birthDate, password } = req.body;
		if (!firstName || !lastName || !email || !password) {
			return res.status(400).json({ message: 'Incomplete values' });
		}
		const user = await usersServices.getUserBy({ email });
		if (user) {
			return res.status(400).json({ message: 'User already exists' });
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
		res.status(201).json(result);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error' });
	}

} // add createUser to the export object

const updateUser = async (req, res) => {};

const deleteUser = async (req, res) => {};

export default {
	getUsers,
	getUserById,
	createUser, // add createUser to the export object
	updateUser,
	deleteUser,
	getUserByEmail
} // export an object with all the methods