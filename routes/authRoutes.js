import express from "express"
import { registerController, loginUser, forgotPassword } from "../controllers/registerController.js"
import { requireSignIn, } from "../middlewares/authMiddleware.js"
const router = express.Router()

// create public routing
router.post("/register", registerController)
router.post("/loginUser", loginUser)
router.post("/forgot-password", forgotPassword)


// Protect user-auth Routes
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})

export default router
