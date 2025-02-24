import productModel from "./models/product.model.js"; // import the productModel from the product.model.js file

export default class ProductDao { // create a class called ProductDao to interact with the productModel collection in the database 
	
	get = async ()=>{
		return await productModel.find();
	}

	getById  = async ()=>{
		return await productModel.findById();
	}

	create = async (product)=>{  // product is an object with name, description and price
		return await productModel.create(product); // create is a mongoose method
	}

	update = async ()=>{
		return await productModel.findByIdAndUpdate();
	}

	delete = async ()=>{
		return await productModel.findByIdAndDelete();
	}
}
