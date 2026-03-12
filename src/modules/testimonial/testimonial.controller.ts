// testimonial.controller.ts
import { Request, Response } from "express"
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from "./testimonial.service"

interface ITestimonialBody {
  name: string;
  position: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
  isActive?: boolean;
}

export const getAllTestimonials = async (req: Request, res: Response) => {
  try {
    const testimonials = await getTestimonials()
    res.status(200).json({ 
      success: true, 
      data: testimonials 
    })
  } catch (error: any) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    })
  }
}

export const addTestimonial = async (req: Request, res: Response) => {
  try {
    const body = req.body as ITestimonialBody
    
    // Validate required fields
    if (!body.name || !body.position || !body.company || !body.image || !body.testimonial || !body.rating) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
      })
    }

    const newTestimonial = await createTestimonial(body)
    res.status(201).json({ 
      success: true, 
      message: "Testimonial created successfully", 
      data: newTestimonial 
    })
  } catch (error: any) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    })
  }
}

export const editTestimonial = async (req: Request, res: Response) => {
  try {
    const testimonial = await updateTestimonial(req.params.id as string, req.body)
    if (!testimonial) {
      return res.status(404).json({ 
        success: false, 
        message: "Testimonial not found" 
      })
    }
    res.status(200).json({ 
      success: true, 
      message: "Testimonial updated successfully", 
      data: testimonial 
    })
  } catch (error: any) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    })
  }
}

export const removeTestimonial = async (req: Request, res: Response) => {
  try {
    const testimonial = await deleteTestimonial(req.params.id as string)
    if (!testimonial) {
      return res.status(404).json({ 
        success: false, 
        message: "Testimonial not found" 
      })
    }
    res.status(200).json({ 
      success: true, 
      message: "Testimonial deleted successfully" 
    })
  } catch (error: any) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    })
  }
}