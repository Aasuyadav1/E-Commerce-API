import express from "express";
import orderController from "../Controller/orderController"

const router = express.Router();

router.route("/orders").get(orderController.getOrders);
router.route("/updateOrderStatus/:id").patch(orderController.updateOrderStatus);
router.route("/getOrderByStatus/:status").get(orderController.getOrderByStatus);

export default router
