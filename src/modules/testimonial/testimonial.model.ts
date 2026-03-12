import mongoose, { Schema, Document } from "mongoose"

export interface ITestimonial extends Document {
  name: string
  position: string
  company: string
  image: string
  testimonial: string
  rating: number
  isActive: boolean
}

const TestimonialSchema: Schema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
  image: { type: String, required: true },
  testimonial: { type: String, required: true }, // comment না, testimonial হবে
  rating: { type: Number, required: true, min: 1, max: 5 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true })

export default mongoose.model<ITestimonial>("Testimonial", TestimonialSchema)