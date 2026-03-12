import { Request, Response } from "express"
import { getUsers, getUserById, updateUser, deleteUser } from "./user.service"

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await getUsers()
  res.json(users)
}

export const getSingleUser = async (req: Request, res: Response) => {
  const user = await getUserById(req.params.id)
  res.json(user)
}

export const editUser = async (req: Request, res: Response) => {
  const user = await updateUser(req.params.id, req.body)
  res.json(user)
}

export const removeUser = async (req: Request, res: Response) => {
  await deleteUser(req.params.id)
  res.json({ message: "User deleted" })
}