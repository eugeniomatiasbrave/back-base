import userModel from "./models/user.model.js";

export default class UserDao {
	
	get = async ()=>{
		return await userModel.find();
	}

	getOne = async (params)=>{
		console.log(`Searching for user with params: ${JSON.stringify(params)}`);
        const user = await userModel.findOne(params);
        console.log(`User found in getOne: ${user}`);
        return user;
    }  

	create = async (user)=>{
		return await userModel.create(user);
	}

	update = async (id, user)=>{
		return await userModel.findByIdAndUpdate(id, user);
	}

	delete = async (id)=>{
		return await userModel.findByIdAndDelete(id);
	}

}