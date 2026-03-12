import User from "./user.model"

export const getUsers = () => User.find()
export const getUserById = (id: string) => User.findById(id)
export const updateUser = (id: string, data: any) => User.findByIdAndUpdate(id, data, { new: true })
export const deleteUser = (id: string) => User.findByIdAndDelete(id)