import express from "express";
import authController from "../Controller/authController"

const router = express.Router();

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);
router.route("/verify/:token").get(authController.verify);
router.route("/user").get();

export  default router