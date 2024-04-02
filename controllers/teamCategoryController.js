import slugify from "slugify";
import teamCatModel from "../models/teamCategory.js";

//Category controller

//create category
export const teamCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({
                success: true,
                message: "Category field is required"
            })
        }
        const existingCategory = await teamCatModel.findOne({ name })
        if (existingCategory) {
            return res.status(401).send({
                success: true,
                message: "Category already exists"
            })
        }
        const teamCategory = await new teamCatModel({ name, slug: slugify(name) }).save()
        res.status(201).send({
            success: true,
            message: "Category created",
            teamCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error while creating category",
            error
        })
    }
}

// Update category
export const updateCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const category = await teamCatModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true })
        res.status(200).send({
            success: true,
            message: "Category updated successfully",
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error while Updating category",
            error
        })
    }
}

//get all category

export const getAllCategory = async (req, res) => {
    try {
        const getAllCat = await teamCatModel.find({})
        res.status(200).send({
            success: true,
            message: "Fetched category successfully",
            getAllCat
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error while getting all category",
            error
        })
    }
}

//get single category
export const getSingleCategory = async (req, res) => {
    try {
        const { slug } = req.params;
        const getSingleCat = await teamCatModel.findOne({ slug })
        res.status(200).send({
            success: true,
            message: "Fetched single category successfully",
            getSingleCat
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error while getting this category",
            error
        })
    }
}
//delete category
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await teamCatModel.findByIdAndDelete(id)
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



