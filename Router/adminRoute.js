import express from "express";
import adminController from "../Controller/adminController"
import validate from "../Middleware/validationMiddleware";
import { productSchema } from "../validation/productValidation";

const router = express.Router();

router.route("/products/delete/:id").delete(adminController.deleteProduct);
router.route("/products/update/:id").patch(validate(productSchema),adminController.updateProduct);
router.route("/products/create").post(validate(productSchema),adminController.createProduct);

export default router
