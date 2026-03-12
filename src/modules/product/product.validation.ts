import { z } from "zod"

export const productSchema = z.object({
  name: z.string().min(2),
  image: z.string().url(),
  price: z.number().positive(),
  description: z.string().min(10)
})