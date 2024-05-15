import Cart from "../Model/cartModel";

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

export { getCartProducts }