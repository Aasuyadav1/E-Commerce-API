import express from "express";
import bannerController from "../Controller/bannerController"
import validate from "../Middleware/validationMiddleware";
import { bannerSchema } from "../validation/bannerValidation";

const router = express.Router();

router.route("/banner").get(bannerController.getBanners);
router.route("/banner/update/:id").patch(validate(bannerSchema),bannerController.updateBanner);
router.route("/banner/create").post(validate(bannerSchema),bannerController.createBanner);
router.route("/banner/delete/:id").delete(bannerController.deleteBanner);

export default router