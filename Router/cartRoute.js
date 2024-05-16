import express from "express"
import cartController from "../Controller/cartController"
import authMiddleware from "../Middleware/authMiddleware";

const router = express.Router();
router.route("/cart").get(authMiddleware, cartController.getCartProducts);

export default router