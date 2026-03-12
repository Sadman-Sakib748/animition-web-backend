import mongoose, { Schema, Document } from "mongoose"

export interface ISettings extends Document {
  siteName: string
  logo: string
  theme: string
  contactEmail: string
  isDefault?: boolean
}

const SettingsSchema: Schema = new Schema({
  siteName: { type: String, required: true },
  logo: { type: String, required: true },
  theme: { type: String, default: "light" },
  contactEmail: { type: String, required: true },
  isDefault: { type: Boolean, default: false }
}, { timestamps: true })

export default mongoose.model<ISettings>("Settings", SettingsSchema)