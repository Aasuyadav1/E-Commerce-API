import mongoose, { Schema } from "mongoose";

const cartModel = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    products : [
        {
            type : Schema.Types.ObjectId,
            ref : "Product"
        }
    ]
})

const Cart = mongoose.model("Cart", cartModel);

export default Cart