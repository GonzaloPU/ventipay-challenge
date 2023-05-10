const express = require("express");
const router = express();
const paymentController = require('../controller/paymentController');

router
    .get("/", paymentController.getAllPayments)

    .get("/:paymentId", paymentController.getDetailPayment)
    
    .get("/:paymentType", paymentController.getPaymentsByFilter)

    .delete("/:paymentId", paymentController.deletePayment)

module.exports = router;
