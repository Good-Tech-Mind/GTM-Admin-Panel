import { mongoose } from "mongoose";
const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    slug: {
        type: String,
        require: true,
    },
    category: {
        type: mongoose.ObjectId,
        ref: "teamcategory",
        require: true
    },
    subcategory: {
        type: mongoose.ObjectId,
        ref: "teamsubcategory",
        require: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    socialhandle: {
        type: String,
    },
    image: {
        data: Buffer,
        contentType: String
    },
}, { timestamps: true })
const teamModel = mongoose.model("team", teamSchema)
export default teamModel