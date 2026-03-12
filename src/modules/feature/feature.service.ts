import Feature from "./feature.model"

export const getFeatures = () => Feature.find()
export const createFeature = (data: any) => Feature.create(data)
export const updateFeature = (id: string, data: any) => Feature.findByIdAndUpdate(id, data, { new: true })
export const deleteFeature = (id: string) => Feature.findByIdAndDelete(id)