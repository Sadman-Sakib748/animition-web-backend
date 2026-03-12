import { Request, Response } from "express"
import { getFeatures, createFeature, updateFeature, deleteFeature } from "./feature.service"

export const getAllFeatures = async (req: Request, res: Response) => {
  const features = await getFeatures()
  res.json(features)
}

export const addFeature = async (req: Request, res: Response) => {
  const feature = await createFeature(req.body)
  res.json(feature)
}

export const editFeature = async (req: Request, res: Response) => {
  const feature = await updateFeature(req.params.id as string, req.body)
  res.json(feature)
}

export const removeFeature = async (req: Request, res: Response) => {
  await deleteFeature(req.params.id as string)
  res.json({ message: "Feature deleted" })
}