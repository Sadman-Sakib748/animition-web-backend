import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import { errorHandler } from "./src/middlewares/errorHandler"
import router from "./src/routes"

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use("/api", router)

app.use(errorHandler)

export default app