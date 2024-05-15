import express from "express"
import cartController from "../Controller/cartController"

const router = express.Router();
router.route("/cart").get(cartController.getCartProducts);

export default router