import express from "express"
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";

import cors from "cors";

// config dotenv
dotenv.config()

// databse configuration
connectDB(process.env.MONGO_URL)

// service port
const PORT = process.env.PORT
const app = express();

// middlewares
app.use(express.json());
app.use(cors())
app.use("/api/v1/user", authRoutes)
app.use("/api/v1/team", teamRoutes)

// rest api
app.get("/", (req, res) => {
    res.send("hello")
})

// listening port
app.listen(PORT, () => {
    console.log(`Server is running at port http://localhost:${PORT}`)
})