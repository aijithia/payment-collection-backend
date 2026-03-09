const db = require("../config/db");

const getAllCustomers = (callback) => {
    const query = "SELECT * FROM customers";  
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
module.exports = { getAllCustomers };