import express from "express"
import { requireSignIn, } from "../middlewares/authMiddleware.js"
import {
    deleteCategory,
    getAllCategory,
    getSingleCategory,
    teamCategoryController,
    updateCategory
} from "../controllers/teamCategoryController.js"
import {
    deleteSubCategory,
    getAllSubCategory,
    getSingleSubCategory,
    teamSubCategoryController,
    updateSubCategory
} from "../controllers/teamSubCatController.js";


const router = express.Router()

// create team routing

// create category
router.post("/add-new-category", requireSignIn, teamCategoryController)
// update category
router.put("/update-new-category/:id", requireSignIn, updateCategory)
//get all category
router.get("/get-all-category", getAllCategory)
//get single category
router.get("/get-single-category/:slug", getSingleCategory)
//delete category
router.delete("/delete-category/:id", requireSignIn, deleteCategory)


//create subcategory
router.post("/add-new-subcategory", requireSignIn, teamSubCategoryController)
// update category
router.put("/update-new-subcategory/:id", requireSignIn, updateSubCategory)
//get all category
router.get("/get-all-subcategory", getAllSubCategory)
//get single category
router.get("/get-single-subcategory/:slug", getSingleSubCategory)
//delete category
router.delete("/delete-subcategory/:id", requireSignIn, deleteSubCategory)

export default router
