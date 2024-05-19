import express from "express";
import {getBanner, addNewBanner, deleteBanner, updateBanner} from "../Controller/bannerController.js"
import validate from "../Middleware/validationMiddleware.js";
import { bannerSchema } from "../validation/bannerValidation.js";
import authMiddleware from "../Middleware/authMiddleware.js";
import isAdmin from "../Middleware/isAdminMiddleware.js";
import upload from "../Middleware/multerMiddleware.js";

const router = express.Router();

router.route("/banner").get(getBanner);
router.route("/banner/update/:id").patch(authMiddleware, isAdmin, validate(bannerSchema), upload.single("image"), updateBanner);
router.route("/banner/create").post(authMiddleware, isAdmin, validate(bannerSchema), upload.single("image"), addNewBanner);
router.route("/banner/delete/:id").delete(authMiddleware, isAdmin, deleteBanner);

export default router