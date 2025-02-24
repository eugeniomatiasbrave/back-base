import mongoose from "mongoose";

const collection= "Users";

const schema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		default: "user",
		required: true
	}
});

const userModel = mongoose.model(collection, schema);

export default userModel;