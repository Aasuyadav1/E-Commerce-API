import express from "express";
import {getOrderByStatus, updateOrderStatus, getOrderDetail} from "../Controller/orderController.js"
import authMiddleware from "../Middleware/authMiddleware.js";
import isAdmin from "../Middleware/isAdminMiddleware.js";

const router = express.Router();

router.route("/orders").get(authMiddleware, isAdmin, getOrderDetail);
router.route("/updateOrderStatus/:id").patch(authMiddleware, isAdmin, updateOrderStatus);
router.route("/getOrderByStatus/:status").get(authMiddleware, isAdmin, getOrderByStatus);

export default router
