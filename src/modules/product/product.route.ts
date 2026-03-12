import { Router } from "express"
import { getAllProducts, addProduct, editProduct, removeProduct } from "./product.controller"
import { admin, auth } from "../../middlewares/auth"


const router = Router()

router.get("/", getAllProducts)
router.post("/", auth, admin, addProduct)
router.put("/:id", auth, admin, editProduct)
router.delete("/:id", auth, admin, removeProduct)

export default router