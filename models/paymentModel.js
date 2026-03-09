const db = require("../config/db");

const createPayment = (customerId, amount, callback) => {
    const query = `
        INSERT INTO payments (customer_id, payment_amount, status)
        VALUES (?, ?, ?)
    `;
    db.query(query, [customerId, amount, "SUCCESS"], (err, result) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });
};

const getPaymentsByAccount = (accountNumber, callback) => {
    const query = `
        SELECT p.payment_amount, p.status, p.payment_date
        FROM payments p
        JOIN customers c ON p.customer_id = c.id
        WHERE c.account_number = ?
    `;
    db.query(query, [accountNumber], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
module.exports = { createPayment, getPaymentsByAccount };