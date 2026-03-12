import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
  await mongoose.connect(process.env.DB_URL!)
  console.log("Primary MongoDB connected")
}

export const connectSecondaryDB = async () => {
  await mongoose.createConnection(process.env.DB_URL_SECONDARY!)
  console.log("Secondary MongoDB connected")
}