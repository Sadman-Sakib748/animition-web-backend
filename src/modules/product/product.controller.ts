import { Request, Response } from "express"
import { getProducts, createProduct, updateProduct, deleteProduct } from "./product.service"

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await getProducts()
  res.json(products)
}

export const addProduct = async (req: Request, res: Response) => {
  const product = await createProduct(req.body)
  res.json(product)
}

export const editProduct = async (req: Request, res: Response) => {
  const product = await updateProduct(req.params.id, req.body)
  res.json(product)
}

export const removeProduct = async (req: Request, res: Response) => {
  await deleteProduct(req.params.id)
  res.json({ message: "Product deleted" })
}