"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testimonial_controller_1 = require("./testimonial.controller");
const auth_1 = require("../../middlewares/auth");
const router = (0, express_1.Router)();
// Public routes (সবাই দেখতে পারে)
router.get("/", testimonial_controller_1.getAllTestimonials);
// Admin only routes (শুধু অ্যাডমিন)
router.post("/", auth_1.auth, auth_1.admin, testimonial_controller_1.addTestimonial);
router.put("/:id", auth_1.auth, auth_1.admin, testimonial_controller_1.editTestimonial);
router.delete("/:id", auth_1.auth, auth_1.admin, testimonial_controller_1.removeTestimonial);
exports.default = router;
