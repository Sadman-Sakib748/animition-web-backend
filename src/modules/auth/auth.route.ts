import { Router } from "express"
import { register, login, updateProfile, getUserCount, getAllUsers } from "./auth.controller"
import { auth } from "../../middlewares/auth"

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.put("/profile/:id", auth, updateProfile)
router.get("/user-count", auth, getUserCount)
router.get("/all-users", auth, getAllUsers)

export default router