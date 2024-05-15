import User from "../Model/userModel";
import Token from "../Model/tokenModel";
import verifyEmail from "../Conf/verifyEmail";

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const isEmailExist = await User.findOne({ email });

        if (isEmailExist) {
            return res.status(400).json({
                message: "Email already exist"
            })
        }

        const user = new User({
            name,
            email,
            password
        })

        await user.save();

        const token = await user.generateToken();

        const verifyToken = await Token.create({token, UserId: user._id})

        if(!verifyToken){
            return res.status(400).json({
                message: "Verify Token not created"
            })
        }

        await verifyToken.save();

        const link = `${process.env.LINK}/${verifyToken.token}`

        await verifyEmail(email, link)

        return res.status(201).json({
            message: "Verification email sent successfully",
            token
        })

    } catch (error) {
        console.log(error)
    }
}

const verify = async (req, res) => {
    try {
        const token = req.params.token;

        const verifyToken = await Token.findOne({ token });

        if(!verifyToken){
            return res.status(400).json({
                message: "Verify Token not found"
            })
        }

        const user = await User.findById(verifyToken.UserId);

        if(!user){
            return res.status(400).json({
                message: "User not found"
            })
        }

        user.isVerified = true;

        await user.save();

        const tokenDelete = await Token.findByIdAndDelete(verifyToken._id);

        if(!tokenDelete){
            return res.status(400).json({
                message: "Verify Token not deleted"
            })
        }

        await tokenDelete.save();

        return res.status(200).json({
            message: "User verified successfully"
        })

    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(!user || !user.isVerified){
            return res.status(400).json({
                message: "User not verified"
            })
        }

        const isMatch = await user.comparePassword(password);

        if(!isMatch){
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const token = await user.generateToken();

        return res.status(200).json({
            message: "User logged in successfully",
            token
        })
    } catch (error) {
        console.log(error)
    }
}

const logout = async (req, res) => {
    try {
        const user = req.user;

        user.token = null;

        await user.save();

        return res.status(200).json({
            message: "User logged out successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

export { register, login, logout, verify }