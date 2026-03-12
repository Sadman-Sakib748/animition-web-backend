import { Router } from "express"
import { 
  getAllSettingsController,
  getDefaultSettingsController,
  getSettingsByIdController,
  addSettings, 
  editSettings, 
  removeSettings 
} from "./settings.controller"
import { admin, auth } from "../../middlewares/auth"

const router = Router()

// Public routes
router.get("/", getAllSettingsController)          
router.get("/default", getDefaultSettingsController) 
router.get("/:id", getSettingsByIdController)       

// Admin only routes
router.post("/", auth, admin, addSettings)          
router.put("/:id", auth, admin, editSettings)      
router.delete("/:id", auth, admin, removeSettings)  

export default router