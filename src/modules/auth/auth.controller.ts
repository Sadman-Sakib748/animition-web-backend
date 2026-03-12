import { Request, Response } from "express"
import User from "../user/user.model"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { registerSchema, loginSchema } from "./auth.validation"

// Token create
const createToken = (payload: object) => {
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "7d" })
}

// Register
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = registerSchema.parse(req.body)

    const existingUser = await User.findOne({ email })
    if (existingUser)
      return res.status(400).json({ success: false, message: "Email already exists" })

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({ name, email, password: hashedPassword, role: "user" })
    const token = createToken({ id: user._id, role: user.role })

    res.status(201).json({ success: true, user, token })
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message || "Server Error" })
  }
}

// Login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = loginSchema.parse(req.body)

    const user = await User.findOne({ email })
    if (!user)
      return res.status(400).json({ success: false, message: "Invalid credentials" })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
      return res.status(400).json({ success: false, message: "Invalid credentials" })

    const token = createToken({ id: user._id, role: user.role })
    res.status(200).json({ success: true, user, token })
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message || "Server Error" })
  }
}

// Profile Update
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id
    const { name, email, password } = req.body

    const user = await User.findById(userId)
    if (!user) return res.status(404).json({ success: false, message: "User not found" })

    if (name) user.name = name
    if (email) user.email = email
    if (password) user.password = await bcrypt.hash(password, 10)

    await user.save()
    res.status(200).json({ success: true, user })
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message || "Server Error" })
  }
}

// Get user count
export const getUserCount = async (req: Request, res: Response) => {
  try {
    const userCount = await User.countDocuments()
    res.status(200).json({ success: true, userCount })
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message || "Server Error" })
  }
}

// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password')
    const userCount = users.length
    res.status(200).json({ 
      success: true, 
      users,
      userCount 
    })
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message || "Server Error" })
  }
}