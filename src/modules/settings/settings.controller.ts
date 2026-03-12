import { Request, Response } from "express"
import {
  getAllSettings,
  getDefaultSettings,
  getSettingsById,
  createSettings,
  updateSettings,
  deleteSettings
} from "./settings.service"


export const getAllSettingsController = async (req: Request, res: Response) => {
  try {
    const settings = await getAllSettings()
    res.status(200).json({
      success: true,
      count: settings.length,
      data: settings
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}


export const getDefaultSettingsController = async (req: Request, res: Response) => {
  try {
    const settings = await getDefaultSettings()
    if (!settings) {
      return res.status(404).json({
        success: false,
        message: "No settings found"
      })
    }
    res.status(200).json({
      success: true,
      data: settings
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}


export const getSettingsByIdController = async (req: Request, res: Response) => {
  try {
    const settings = await getSettingsById(req.params.id as string)
    if (!settings) {
      return res.status(404).json({
        success: false,
        message: "Settings not found"
      })
    }
    res.status(200).json({
      success: true,
      data: settings
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}


export const addSettings = async (req: Request, res: Response) => {
  try {
    const { siteName, logo, theme, contactEmail } = req.body

    // ভ্যালিডেশন
    if (!siteName || !logo || !contactEmail) {
      return res.status(400).json({
        success: false,
        message: "siteName, logo and contactEmail are required"
      })
    }

    const settings = await createSettings(req.body)
    res.status(201).json({
      success: true,
      message: "Settings created successfully",
      data: settings
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const editSettings = async (req: Request, res: Response) => {
  try {
    const settings = await updateSettings(req.params.id as string, req.body)
    if (!settings) {
      return res.status(404).json({
        success: false,
        message: "Settings not found"
      })
    }
    res.status(200).json({
      success: true,
      message: "Settings updated successfully",
      data: settings
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}


export const removeSettings = async (req: Request, res: Response) => {
  try {
    const settings = await deleteSettings(req.params.id as string)
    if (!settings) {
      return res.status(404).json({
        success: false,
        message: "Settings not found"
      })
    }
    res.status(200).json({
      success: true,
      message: "Settings deleted successfully"
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}