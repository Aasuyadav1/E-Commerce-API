import { Schema } from "mongoose";

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: [
        {
            type: String
        }
    ],
    quantity: {
        type: Number,
        required: true
    },
    discountRate: {
        type: Number,
    },
    isTrending: {
        type: Boolean
    },
    isFeatured: {
        type: Boolean
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
})

const Product = mongoose.model("Product", productSchema);

export default Product