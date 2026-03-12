import { Router } from "express"

import { getAllFeatures, addFeature, editFeature, removeFeature } from "./feature.controller"
import { admin, auth } from "../../middlewares/auth"

const router = Router()
router.get("/", getAllFeatures)
router.post("/", auth, admin, addFeature)
router.put("/:id", auth, admin, editFeature)
router.delete("/:id", auth, admin, removeFeature)

export default router