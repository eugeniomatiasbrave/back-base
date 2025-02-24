import mongoose from "mongoose";

const collection = "Products";

const schema = new mongoose.Schema({
   name: {
		type: String,
		
  },
  description: {
		type: String,
		
  },
  price: {
		type: Number,
		
  }
})

const productModel = mongoose.model(collection,schema);

export default productModel;