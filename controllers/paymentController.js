const db = require("../config/db");
const paymentModel = require("../models/paymentModel");

const makePayment = (req, res) => {
    const { account_number, payment_amount } = req.body;
    const findCustomerQuery = "SELECT * FROM customers WHERE account_number = ?";
    db.query(findCustomerQuery, [account_number], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "Customer not found" });
        }
        const customerId = results[0].id;
        paymentModel.createPayment(customerId, payment_amount, (err, result) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.json({
                message: "Payment successful",
                payment_id: result.insertId
            });
        });
    });
};

const getPaymentHistory = (req, res) => {
    const accountNumber = req.params.account_number;
    paymentModel.getPaymentsByAccount(accountNumber, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
};
module.exports = { makePayment, getPaymentHistory };