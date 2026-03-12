import Settings from "./settings.model"

export const getAllSettings = () => Settings.find()


export const getDefaultSettings = () => Settings.findOne()

export const getSettingsById = (id: string) => Settings.findById(id)

export const createSettings = (data: any) => Settings.create(data)

export const updateSettings = (id: string, data: any) => 
  Settings.findByIdAndUpdate(id, data, { new: true, runValidators: true })

export const deleteSettings = (id: string) => 
  Settings.findByIdAndDelete(id)