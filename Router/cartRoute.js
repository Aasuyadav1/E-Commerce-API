import express from "express"
import { getCartProducts, addProductToCart, deleteProductFromCart } from "../Controller/cartController.js"
import authMiddleware from "../Middleware/authMiddleware.js";

const router = express.Router();
router.route("/cart").get(authMiddleware, getCartProducts);
router.route("/cart/add:/id").post(authMiddleware, addProductToCart);
router.route("/cart/delete:/id").delete(authMiddleware, deleteProductFromCart);

export default router