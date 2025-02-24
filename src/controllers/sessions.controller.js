import jwt from 'jsonwebtoken';
import config from '../config/config.env.js';
import UserDto from '../dto/UserDTO.js';

const SECRET = config.auth.jwt.SECRET;

const register = (req, res) => {
    res.sendSuccess("Registered");
};

const login = async (req, res) => {
        const sessionUser = UserDto.forToken(req.user);

        const token = jwt.sign(sessionUser,SECRET,{expiresIn:'1h'});
        console.log(token);
        res.cookie('token',token).sendSuccess("Logged in");
};

const adminAccess = async (req, res) => {
    const admin = req.user;
    console.log('admin',admin);
    res.json(admin);
};

const logout = async (req, res) => {
        res.clearCookie('token');
        res.sendSuccess("Logged out");
};


const current = async (req, res) => { // Add the current function, which will return the current user, if logged in, or an error message if not
       const user = req.user;
    if (!user) {
            return res.sendUnauthorized("Unauthorized");
        }
        res.sendSuccess(user);
};

export default {
	register,
	login,
	logout,
    adminAccess,
	current
}
