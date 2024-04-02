import { mongoose } from "mongoose";
const teamCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    slug: {
        type: String,
        lowercase: true,
    }
})
const teamCatModel = mongoose.model("teamcategory", teamCategorySchema)
export default teamCatModel