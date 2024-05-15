import { Schema } from "mongoose";

const bannerSchema = new Schema({
    image : {
        type : String,
        required : true
    },
    title : {
        type : String,
    },
    link : {
        type : String,
        required : true
    }
})

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner