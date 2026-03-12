"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const settings_controller_1 = require("./settings.controller");
const auth_1 = require("../../middlewares/auth");
const router = (0, express_1.Router)();
// Public routes
router.get("/", settings_controller_1.getAllSettingsController);
router.get("/default", settings_controller_1.getDefaultSettingsController);
router.get("/:id", settings_controller_1.getSettingsByIdController);
// Admin only routes
router.post("/", auth_1.auth, auth_1.admin, settings_controller_1.addSettings);
router.put("/:id", auth_1.auth, auth_1.admin, settings_controller_1.editSettings);
router.delete("/:id", auth_1.auth, auth_1.admin, settings_controller_1.removeSettings);
exports.default = router;
