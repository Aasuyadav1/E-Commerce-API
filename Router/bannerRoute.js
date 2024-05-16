import express from "express";
import bannerController from "../Controller/bannerController"
import validate from "../Middleware/validationMiddleware";
import { bannerSchema } from "../validation/bannerValidation";
import authMiddleware from "../Middleware/authMiddleware";
import isAdmin from "../Middleware/isAdminMiddleware";

const router = express.Router();

router.route("/banner").get(bannerController.getBanners);
router.route("/banner/update/:id").patch(authMiddleware, isAdmin, validate(bannerSchema), bannerController.updateBanner);
router.route("/banner/create").post(authMiddleware, isAdmin, validate(bannerSchema), bannerController.createBanner);
router.route("/banner/delete/:id").delete(authMiddleware, isAdmin, bannerController.deleteBanner);

export default router