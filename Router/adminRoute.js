import express from "express";
import { createProduct, updateProduct, deleteProduct } from "../Controller/adminController.js"
import validate from "../Middleware/validationMiddleware.js";
import { productSchema } from "../validation/productValidation.js";
import authMiddleware from "../Middleware/authMiddleware.js";
import isAdmin from "../Middleware/isAdminMiddleware.js";
import upload from "../Middleware/multerMiddleware.js";

const router = express.Router();

router.route("/products/delete/:id").delete(authMiddleware, isAdmin, deleteProduct);
router.route("/products/update/:id").patch(authMiddleware, isAdmin, validate(productSchema), upload.single("image"), updateProduct);
router.route("/products/create").post(authMiddleware, isAdmin, validate(productSchema), upload.single("image"), createProduct);
// image name same as frontend we getting that image

export default router
