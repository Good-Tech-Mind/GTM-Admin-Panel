import userModel from "../models/userModels.js"
import { hashPassword, comparePassword } from "../helper/authHelper.js"
import jwt from "jsonwebtoken";

// Create user details
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;
        const user = await userModel.findOne({ email: email })
        if (!user) {
            if (name && email && password && phone && address && answer) {
                const hashedPassword = await hashPassword(password)
                const user = await new userModel({
                    name, email, password: hashedPassword, phone, address, answer
                }).save()
                res.send({ success: true, message: "Registration successfully", user })
            } else {
                res.send({ success: false, message: "All fields are required" })
            }
        } else {
            res.send({ success: false, message: "Already registered please login" })
        }
    } catch (error) {
        console.log(error)
        res.send({ success: false, message: "Internal server error" })
    }
}

// Create login functionality
export const loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (user) {
        if (email && password) {
            const ismatch = await comparePassword(password, user.password)
            if (ismatch) {
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "5d" })
                res.status(200).send({ success: true, message: "Login successfully", user: { name: user.name, email: user.email, role: user.role, phone: user.phone }, token })
            } else {
                res.send({ success: false, message: "Invalid password" })
            }
        } else {
            res.send({ success: false, message: "All fields are required" })
        }
    } else {
        res.send({ success: false, message: "User not found please register" })
    }
}

// user password forget route
export const forgotPassword = async (req, res) => {
    try {
        const { email, newPassword, answer } = req.body;
        if (email && newPassword && answer) {
            const user = await userModel.findOne({ email, answer })
            if (user) {
                const newHashedPassword = await hashPassword(newPassword)
                await userModel.findByIdAndUpdate(user._id, { password: newHashedPassword })
                res.send({ success: true, message: "Password changed successfully" })
            } else {
                res.send({ success: false, message: "Invalid password or answer" })
            }
        } else {
            res.send({ success: false, message: "All fields are required" })
        }
    } catch (error) {
        res.send({ success: false, message: "Internal server Error" })
    }
}


// test route admin
export const testRoute = async (req, res) => {
    res.send({ success: true, haha: "Neeraj" })
}