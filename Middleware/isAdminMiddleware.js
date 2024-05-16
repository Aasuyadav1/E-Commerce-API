import User from "../Model/userModel";


const isAdmin = async (req, res, next) => {
    try {
        
        const user = await User.findById(req.user._id);

        if(!user.isAdmin){
            return res.status(401).json({
                message: "Unauthorized access"
            })
        }

        next()
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default isAdmin