import express from "express";
import {register, login, logout, verify} from "../Controller/authController.js"
import { registerSchema, loginSchema } from "../validation/authValidation.js"
import validate from "../Middleware/validationMiddleware.js";
import authMiddleware from "../Middleware/authMiddleware.js";

const router = express.Router();

router.route("/register").post(validate(registerSchema),register);
router.route("/login").post(validate(loginSchema),login);
router.route("/logout").get(logout);
router.route("/verify/:token").get(verify);
// router.route("/user").get(authMiddleware, authController.getUser);

export  default router