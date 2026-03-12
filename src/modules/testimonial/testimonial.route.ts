import { Router } from "express"
import { 
  getAllTestimonials, 
  addTestimonial, 
  editTestimonial, 
  removeTestimonial 
} from "./testimonial.controller"
import { admin, auth } from "../../middlewares/auth"

const router = Router()

// Public routes (সবাই দেখতে পারে)
router.get("/", getAllTestimonials)

// Admin only routes (শুধু অ্যাডমিন)
router.post("/", auth, admin, addTestimonial)
router.put("/:id", auth, admin, editTestimonial)
router.delete("/:id", auth, admin, removeTestimonial)

export default router