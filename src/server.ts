import app from "./app"
import mongoose from "mongoose"

const PORT = process.env.PORT || 5000
const DB_URL = process.env.DB_URL!

mongoose
  .connect(DB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))