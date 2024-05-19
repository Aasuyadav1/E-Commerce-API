import Banner from "../Model/bannerModel.js";
import { uploadImage } from "../Conf/uploadImage.js";

const getBanner = async (req, res) => {
    try {
        const banners = await Banner.find();

        if(!banners){
            return res.status(404).json({
                message: "Banners not found"
            })
        }

        return res.status(200).json({
            message: "Banners fetched successfully",
            banners
        })
    } catch (error) {
        console.log(error)
    }
}

const addNewBanner = async (req, res) => {
    try {

        const isAdmin = req.user.isAdmin;

        if(!isAdmin){
            return res.status(403).json({
                message: "Unauthorized access"
            })
        }

        const { title, link } = req.body;

        const image = await uploadImage(req.file)

        const banner = await Banner.create({
            image,
            title,
            link
        })

        if(!banner){
            return res.status(400).json({
                message: "Banner not created"
            })
        }

        return res.status(201).json({
            message: "Banner created successfully",
            banner
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteBanner = async (req, res) => {
    try {
       const isAdmin = req.user.isAdmin
       
       if(!isAdmin){
        return res.status(403).json({
            message: "Unauthorized access"
        })
       }

       const banner = await Banner.findByIdAndDelete(req.params.id);

       if(!banner){
        return res.status(404).json({
            message: "Banner not found"
        })
       }

       await banner.save();

       return res.status(200).json({
           message: "Banner deleted successfully"
       })
    } catch (error) {
        console.log(error)
    }
}

const updateBanner = async (req, res) => {
    try {
        const isAdmin = req.user.isAdmin

        if(!isAdmin){
            return res.status(403).json({
                message: "Unauthorized access"
            })
        }
        
        const id = req.params.id

        const { title, link } = req.body;

        const image = await uploadImage(req.file)

        const banner = await Banner.findByIdAndUpdate(id, {
            image,
            title,
            link
        })

        if(!banner){
            return res.status(404).json({
                message: "Banner not found"
            })
        }

        await banner.save();

        return res.status(200).json({
            message: "Banner updated successfully",
            banner
        })
    } catch (error) {
        console.log(error)
    }
}

export { getBanner, addNewBanner, deleteBanner, updateBanner }