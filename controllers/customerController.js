const customerModel = require("../models/customerModel");

const getCustomers = (req, res) => {
    customerModel.getAllCustomers((err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
};

module.exports = { getCustomers };