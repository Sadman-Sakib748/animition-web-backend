import { Router } from "express"
import { getAllUsers, getSingleUser, editUser, removeUser } from "./user.controller"
import { admin, auth } from "../../middlewares/auth"

const router = Router()
router.get("/", auth, admin, getAllUsers)
router.get("/:id", auth, admin, getSingleUser)
router.put("/:id", auth, admin, editUser)
router.delete("/:id", auth, admin, removeUser)

export default router