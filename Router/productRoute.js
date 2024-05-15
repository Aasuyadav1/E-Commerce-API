import express from "express";
import productController from "../Controller/productController"

const router = express.Router();

router.route("/products").get(productController.getProducts);
router.route("/products/:id").get(productController.getProductById);
router.route("/products/category/:category").get(productController.getProductsByCategory);
router.route("/products/isTrending").get(productController.getTrendingProducts);
router.route("/products/delete/:id").delete(productController.deleteProduct);
router.route("/products/update/:id").patch(productController.updateProduct);
router.route("/products/create").post(productController.createProduct);

export default router
