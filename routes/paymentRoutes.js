const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
router.post("/payments", paymentController.makePayment);
router.get("/payments/:account_number", paymentController.getPaymentHistory);
module.exports = router;