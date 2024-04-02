import jwt from "jsonwebtoken";
// import userModel from "../models/userModels.js";

// middleware require signin
export const requireSignIn = async (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        try {
            const ismatch = jwt.verify(authorization, process.env.JWT_SECRET)
            if (ismatch) {
                req.user = ismatch
                next()
            } else {
                res.send({ success: false, messege: "Internal server error" })
            }
        } catch (error) {
            console.log(error)
            res.send({ success: false, messege: "Invalid token" })
        }
    } else {
        res.send({ success: false, messege: "No token, unauthorize user" })
    }
}