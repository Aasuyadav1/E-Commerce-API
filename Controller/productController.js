import Product from "../Model/productModel";


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

export { getAllProducts, getProductById, getProductsByCategory, getTrendingProducts }