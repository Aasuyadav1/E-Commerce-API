import express from "express";
import productController from "../Controller/productController"
import validate from "../Middleware/validationMiddleware";
import { productSchema } from "../validation/productValidation";

const router = express.Router();

router.route("/products").get(productController.getProducts);
router.route("/products/:id").get(productController.getProductById);
router.route("/products/category/:category").get(productController.getProductsByCategory);
router.route("/products/isTrending").get(productController.getTrendingProducts);

export default router
