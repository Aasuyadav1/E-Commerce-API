import express from "express";
import authController from "../Controller/authController"
import { registerSchema, loginSchema } from "../validation/authValidation"
import validate from "../Middleware/validationMiddleware";

const router = express.Router();

router.route("/register").post(validate(registerSchema),authController.register);
router.route("/login").post(validate(loginSchema),authController.login);
router.route("/logout").get(authController.logout);
router.route("/verify/:token").get(authController.verify);
router.route("/user").get();

export  default router