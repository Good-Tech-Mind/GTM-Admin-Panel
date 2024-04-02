//2. Sub category controller

//create sub category
import teamSubCatModel from "../models/teamSubCategory.js"
import slugify from "slugify";

export const teamSubCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({
                success: true,
                message: "Sub category field is required"
            })
        }
        const existingSubCategory = await teamSubCatModel.findOne({ name })
        if (existingSubCategory) {
            return res.status(401).send({
                success: true,
                message: "Sub category already exists"
            })
        }
        const teamSubCategory = await new teamSubCatModel({ name, slug: slugify(name) }).save()
        res.status(201).send({
            success: true,
            message: "Category created",
            teamSubCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error occured",
            error
        })
    }
}
// Update category
export const updateSubCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const subcategory = await teamSubCatModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true })
        res.status(200).send({
            success: true,
            message: "Sub category updated successfully",
            subcategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error while Updating sub category",
            error
        })
    }
}

//get all category

export const getAllSubCategory = async (req, res) => {
    try {
        const getAllSubCat = await teamSubCatModel.find({})
        res.status(200).send({
            success: true,
            message: "Fetched sub category successfully",
            getAllSubCat
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error while getting all sub category",
            error
        })
    }
}

//get single category
export const getSingleSubCategory = async (req, res) => {
    try {
        const { slug } = req.params;
        const getSingleSubCat = await teamSubCatModel.findOne({ slug })
        res.status(200).send({
            success: true,
            message: "Fetched single sub category successfully",
            getSingleSubCat
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error while getting this sub category",
            error
        })
    }
}
//delete category
export const deleteSubCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await teamSubCatModel.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "Deleted category successfully",
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error while deleting category",
            error
        })
    }
}