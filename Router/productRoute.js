import express from "express";
import { getAllProducts, getProductById, getProductsByCategory, getTrendingProducts, addProductOrder, cancelProductOrder} from "../Controller/productController.js"
import validate from "../Middleware/validationMiddleware.js";
import { productSchema } from "../validation/productValidation.js";

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/:id").get(getProductById);
router.route("/products/category/:category").get(getProductsByCategory);
router.route("/products/isTrending").get(getTrendingProducts);
router.route("/products/order/:id").post(addProductOrder);
router.route("/products/cancelOrder/:id").delete(cancelProductOrder);

export default router
