import express from "express";
import bannerController from "../Controller/bannerController"

const router = express.Router();

router.route("/banner").get(bannerController.getBanners);
router.route("/banner/update/:id").patch(bannerController.updateBanner);
router.route("/banner/create").post(bannerController.createBanner);
router.route("/banner/delete/:id").delete(bannerController.deleteBanner);

export default router