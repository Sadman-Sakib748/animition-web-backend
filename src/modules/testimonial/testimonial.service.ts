import Testimonial from "./testimonial.model"

export const getTestimonials = () => Testimonial.find({ isActive: true }).sort({ createdAt: -1 })

export const getAllTestimonialsAdmin = () => Testimonial.find().sort({ createdAt: -1 })

export const createTestimonial = (data: any) => Testimonial.create(data)

export const updateTestimonial = (id: string, data: any) => 
  Testimonial.findByIdAndUpdate(id, data, { new: true, runValidators: true })

export const deleteTestimonial = (id: string) => 
  Testimonial.findByIdAndDelete(id)