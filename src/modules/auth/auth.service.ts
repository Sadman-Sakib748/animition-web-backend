import User from "../user/user.model"
import bcrypt from "bcrypt"
import { createToken } from "../../types/global"

export const registerUser = async (name: string, email: string, password: string) => {
  const hash = await bcrypt.hash(password, 10)
  const user = await User.create({ name, email, password: hash })
  return user
}

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email })
  if (!user) throw new Error("No user found")
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error("Invalid password")
  const token = createToken({ id: user._id, role: user.role })
  return { token, user }
}

export const getTotalUserCount = async () => {
  return await User.countDocuments()
}

export const getAllUsersFromDB = async () => {
  return await User.find().select('-password')
}