"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTestimonial = exports.editTestimonial = exports.addTestimonial = exports.getAllTestimonials = void 0;
const testimonial_service_1 = require("./testimonial.service");
const getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await (0, testimonial_service_1.getTestimonials)();
        res.status(200).json({
            success: true,
            data: testimonials
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.getAllTestimonials = getAllTestimonials;
const addTestimonial = async (req, res) => {
    try {
        const body = req.body;
        // Validate required fields
        if (!body.name || !body.position || !body.company || !body.image || !body.testimonial || !body.rating) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const newTestimonial = await (0, testimonial_service_1.createTestimonial)(body);
        res.status(201).json({
            success: true,
            message: "Testimonial created successfully",
            data: newTestimonial
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.addTestimonial = addTestimonial;
const editTestimonial = async (req, res) => {
    try {
        const testimonial = await (0, testimonial_service_1.updateTestimonial)(req.params.id, req.body);
        if (!testimonial) {
            return res.status(404).json({
                success: false,
                message: "Testimonial not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Testimonial updated successfully",
            data: testimonial
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.editTestimonial = editTestimonial;
const removeTestimonial = async (req, res) => {
    try {
        const testimonial = await (0, testimonial_service_1.deleteTestimonial)(req.params.id);
        if (!testimonial) {
            return res.status(404).json({
                success: false,
                message: "Testimonial not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Testimonial deleted successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.removeTestimonial = removeTestimonial;
