"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTestimonial = exports.updateTestimonial = exports.createTestimonial = exports.getAllTestimonialsAdmin = exports.getTestimonials = void 0;
const testimonial_model_1 = __importDefault(require("./testimonial.model"));
const getTestimonials = () => testimonial_model_1.default.find({ isActive: true }).sort({ createdAt: -1 });
exports.getTestimonials = getTestimonials;
const getAllTestimonialsAdmin = () => testimonial_model_1.default.find().sort({ createdAt: -1 });
exports.getAllTestimonialsAdmin = getAllTestimonialsAdmin;
const createTestimonial = (data) => testimonial_model_1.default.create(data);
exports.createTestimonial = createTestimonial;
const updateTestimonial = (id, data) => testimonial_model_1.default.findByIdAndUpdate(id, data, { new: true, runValidators: true });
exports.updateTestimonial = updateTestimonial;
const deleteTestimonial = (id) => testimonial_model_1.default.findByIdAndDelete(id);
exports.deleteTestimonial = deleteTestimonial;
