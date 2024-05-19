import Cart from "../Model/cartModel.js";

const getCartProducts = async (req, res) => {
    try {
        const userId = req.user.id;

        const cart = await Cart.findOne({ userId });

        if(!cart){
            return res.status(404).json({
                message: "Cart not found"
            })
        }

        return res.status(200).json({
            message: "Cart fetched successfully",
            cart
        })

    } catch (error) {
        console.log(error)
    }
}

const addProductToCart = async (req, res) => {
    try {
        const userId = req.user.id;

        const { productId, quantity } = req.body;

        const newProduct = await new Cart({
            userId,
            productId,
            quantity
        })

        await newProduct.save();

        if(!newProduct){
            return res.status(400).json({
                message: "Product not added to cart"
            })
        }

        return res.status(201).json({
            message: "Product added to cart successfully",
            newProduct
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteProductFromCart = async (req, res) => {
    try {

        const productId = req.params.id;

        const product = await Cart.findByIdAndDelete(productId);

        if(!product){
            return res.status(404).json({
                message: "Product not found"
            })
        }

        await product.save();

        return res.status(200).json({
            message: "Product deleted from cart successfully",
            product
        })


    } catch (error) {
        console.log(error)
    }
}

export { getCartProducts, addProductToCart, deleteProductFromCart }