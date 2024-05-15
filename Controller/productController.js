import Product from "../Model/productModel";
import Cart from "../Model/cartModel";


const createProduct = async ( req, res ) => {
    try {

        const isAdmin = req.user.isAdmin

        if(!isAdmin){
            return res.status(401).json({
                message: "Unauthorized access"
            })
        }

        const { productName, price, description, category, image, quantity, discountRate, isTrending, isFeatured } = req.body;

        const product = await new Product({
            productName,
            price,
            description,
            category,
            image,
            quantity,
            discountRate,
            isTrending,
            isFeatured
        })

        await product.save();

        return res.status(201).json({
            message: "Product created successfully",
            product
        })
   
    } catch (error) {
        console.log(error)
    }
}

const updateProduct = async (req, res) => {
    try {
        const isAdmin = req.user.isAdmin

        if(!isAdmin){
            return res.status(401).json({
                message: "Unauthorized access"
            })
        }
        
        const { productName, price, description, category, image, quantity, discountRate, isTrending, isFeatured } = req.body;

        const product = await Product.findByIdAndUpdate(req.params.id, {
            productName,
            price,
            description,
            category,
            image,
            quantity,
            discountRate,
            isTrending,
            isFeatured
        })

        await product.save();

        return res.status(200).json({
            message: "Product updated successfully",
            product
        })

    } catch (error) {
        console.log(error)
    }
}

const deleteProduct = async (req, res) => {
    try {

        const isAdmin = req.user.isAdmin

        if(!isAdmin){
            return res.status(401).json({
                message: "Unauthorized access"
            })
        }

        const product = await Product.findByIdAndDelete(req.params.id);

        if(!product){
            return res.status(404).json({
                message: "Product not found"
            })
        }

        const cart = await Cart.deleteMany({ product: product._id });

        await product.save();
        await cart.save();

        return res.status(200).json({
            message: "Product deleted successfully"
        })

    } catch (error) {
       console.log(error) 
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        if(!products){
            return res.status(404).json({
                message: "Products not found"
            })
        }

        return res.status(200).json({
            message: "Products fetched successfully",
            products
        })
    } catch (error) {
        console.log(error)
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await Product.findById(id);

        if(!product){
            return res.status(404).json({
                message: "Product not found"
            })
        }

        return res.status(200).json({
            message: "Product fetched successfully",
            product
        })
    } catch (error) {
        console.log(error)
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category;

        const products = await Product.find({ category });

        if(!products){
            return res.status(404).json({
                message: "Products not found"
            })
        }

        return res.status(200).json({
            message: "Products fetched successfully",
            products
        })
    } catch (error) {
        console.log(error)
    }
}

const getTrendingProducts = async (req, res) => {
    try {
       const products = await Product.find({ isTrending: true });
       
       if(!products){
           return res.status(404).json({
               message: "Products not found"
           })
       }

       return res.status(200).json({
           message: "Products fetched successfully",
           products
       })
    } catch (error) {
        console.log(error)
    }
}

export { createProduct, updateProduct, deleteProduct, getAllProducts, getProductById, getProductsByCategory, getTrendingProducts }