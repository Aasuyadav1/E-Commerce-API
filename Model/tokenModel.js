import {Schema, mongoose} from "mongoose";

const tokenSchema = new Schema({
    UserId : {
        type: Schema.Types.ObjectId,
        ref: "User",
        requires: true
    },
    token: {
        type: String, 
        required: true
    }
})

const Token = mongoose.model("Token", tokenSchema);

export default Token