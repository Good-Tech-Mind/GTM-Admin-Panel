import { mongoose } from "mongoose";
const teamSubCategorySchema = new mongoose.Schema({
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
const teamSubCatModel = mongoose.model("teamsubcategory", teamSubCategorySchema)
export default teamSubCatModel