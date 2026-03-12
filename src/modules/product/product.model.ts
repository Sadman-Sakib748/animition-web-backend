import mongoose from "mongoose"

const schema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  description: String
})

export default mongoose.model("Product", schema)