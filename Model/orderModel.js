import { Schema } from "mongoose";

const orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "delivered", "cancelled"],
        default: "pending"
    }
})

const Order = mongoose.model("Order", orderSchema);

export default Order