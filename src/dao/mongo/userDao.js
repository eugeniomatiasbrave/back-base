import userModel from "./models/user.model.js";

export default class UserDao {
    
    get = async () => {
        try {
            return await userModel.find();
        } catch (error) {
            console.error('Error in get:', error);
            throw new Error('Failed to get users');
        }
    }

    getOne = async (params) => {
        try {
            console.log(`Searching for user with params: ${JSON.stringify(params)}`);
            const user = await userModel.findOne(params);
            console.log(`User found in getOne: ${user}`);
            return user;
        } catch (error) {
            console.error('Error in getOne:', error);
            throw new Error('Failed to get user');
        }
    }  

    create = async (user) => {
        try {
            return await userModel.create(user);
        } catch (error) {
            console.error('Error in create:', error);
            throw new Error('Failed to create user');
        }
    }

    update = async (id, user) => {
        try {
            return await userModel.findByIdAndUpdate(id, user);
        } catch (error) {
            console.error('Error in update:', error);
            throw new Error('Failed to update user');
        }
    }

    delete = async (id) => {
        try {
            return await userModel.findByIdAndDelete(id);
        } catch (error) {
            console.error('Error in delete:', error);
            throw new Error('Failed to delete user');
        }
    }
}