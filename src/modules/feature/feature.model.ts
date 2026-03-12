import mongoose from "mongoose"

const schema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String
})

export default mongoose.model("Feature", schema)