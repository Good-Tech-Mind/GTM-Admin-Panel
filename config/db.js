import mongoose from "mongoose";

const connectDB = async (MONGO_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "e-commerce"
        }
        await mongoose.connect(process.env.MONGO_URL, DB_OPTIONS)
        console.log(`Database connected successfully...`)
    } catch (error) {
        console.log(error)
    }
}
export default connectDB