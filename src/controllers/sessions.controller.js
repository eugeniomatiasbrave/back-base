import jwt from 'jsonwebtoken';
import config from '../config/config.env.js';
import userDto from '../dto/userDto.js';

const SECRET = config.auth.jwt.SECRET;

const register = (req, res) => {
    try {
        res.sendSuccess("Registered");
    } catch (error) {
        console.error('Error in register:', error);
        res.sendServerError('Registration failed');
    }
};

const login = async (req, res) => {
    try {
        const user = req.user;
        const TokenResponseDto = userDto.forToken(user); // Use userDto.js to format the user data for the token
        const token = jwt.sign(TokenResponseDto, SECRET, { expiresIn: '1h' });
        console.log(token);
        res.cookie('token', token).sendSuccess("Logged in");
    } catch (error) {
        console.error('Error in login:', error);
        res.sendServerError('Login failed');
    }
};

const adminAccess = async (req, res) => {
    try {
        const admin = req.user;
        console.log('admin', admin);
        res.json(admin);
    } catch (error) {
        console.error('Error in adminAccess:', error);
        res.sendServerError('Admin access failed');
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.sendSuccess("Logged out");
    } catch (error) {
        console.error('Error in logout:', error);
        res.sendServerError('Logout failed');
    }
};

const current = async (req, res) => { // Add the current function, which will return the current user, if logged in, or an error message if not
    try {
        const user = req.user;
        if (!user) {
            return res.sendUnauthorized("Unauthorized");
        }
        res.sendSuccess(user);
    } catch (error) {
        console.error('Error in current:', error);
        res.sendServerError('Failed to get current user');
    }
};

export default {
	register,
	login,
	logout,
    adminAccess,
	current
}
