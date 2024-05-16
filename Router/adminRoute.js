import express from "express";
import adminController from "../Controller/adminController"
import validate from "../Middleware/validationMiddleware";
import { productSchema } from "../validation/productValidation";
import authMiddleware from "../Middleware/authMiddleware";
import isAdmin from "../Middleware/isAdminMiddleware";

const router = express.Router();

router.route("/products/delete/:id").delete(authMiddleware, isAdmin, adminController.deleteProduct);
router.route("/products/update/:id").patch(authMiddleware, isAdmin, validate(productSchema), adminController.updateProduct);
router.route("/products/create").post(authMiddleware, isAdmin,validate(productSchema), adminController.createProduct);

export default router
