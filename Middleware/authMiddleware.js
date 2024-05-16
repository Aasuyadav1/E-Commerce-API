import User from "../Model/userModel";
import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization")

        if(!token){
            return res.status(400).json({
                message: "token not provided"
            })
        }

        const jwtToken = token.replace("Bearer", "").trim()

        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET)

        const user = await User.findById(decoded._id).select("-password")

        if(!user){
            return res.status(400).json({
                message: "user not found"
            })
        }

        req.user = user
        req.userId = user._id

        next()
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default authMiddleware