import express from "express";
import orderController from "../Controller/orderController"
import authMiddleware from "../Middleware/authMiddleware";
import isAdmin from "../Middleware/isAdminMiddleware";

const router = express.Router();

router.route("/orders").get(authMiddleware, isAdmin, orderController.getOrders);
router.route("/updateOrderStatus/:id").patch(authMiddleware, isAdmin, orderController.updateOrderStatus);
router.route("/getOrderByStatus/:status").get(authMiddleware, isAdmin, orderController.getOrderByStatus);

export default router
