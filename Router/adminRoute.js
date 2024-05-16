import express from "express";
import adminController from "../Controller/adminController"
import validate from "../Middleware/validationMiddleware";
import { productSchema } from "../validation/productValidation";
import authMiddleware from "../Middleware/authMiddleware";
import isAdmin from "../Middleware/isAdminMiddleware";
import upload from "../Middleware/multerMiddleware";

const router = express.Router();

router.route("/products/delete/:id").delete(authMiddleware, isAdmin, adminController.deleteProduct);
router.route("/products/update/:id").patch(authMiddleware, isAdmin, validate(productSchema), upload.single("image"), adminController.updateProduct);
router.route("/products/create").post(authMiddleware, isAdmin, validate(productSchema), upload.single("image"), adminController.createProduct);
// image name same as frontend we getting that image

export default router
