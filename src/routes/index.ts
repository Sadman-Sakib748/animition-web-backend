import { Router } from "express"
import authRoutes from "../modules/auth/auth.route"
import userRoutes from "../modules/user/user.route"
import productRoutes from "../modules/product/product.route"
import testimonialRoutes from "../modules/testimonial/testimonial.route"
import featureRoutes from "../modules/feature/feature.route"
import settingsRoutes from "../modules/settings/settings.route"

const router = Router()

router.use("/auth", authRoutes)
router.use("/users", userRoutes)
router.use("/products", productRoutes)
router.use("/testimonials", testimonialRoutes)
router.use("/features", featureRoutes)
router.use("/settings", settingsRoutes)

export default router