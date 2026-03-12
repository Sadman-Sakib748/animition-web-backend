import Product from "./product.model"

export const getProducts = () => Product.find()
export const createProduct = (data: any) => Product.create(data)
export const updateProduct = (id: string, data: any) => Product.findByIdAndUpdate(id, data, { new: true })
export const deleteProduct = (id: string) => Product.findByIdAndDelete(id)