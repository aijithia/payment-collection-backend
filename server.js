const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const customerRoutes = require("./routes/customerRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api", customerRoutes);
app.use("/api", paymentRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Payment Collection API is running");
});

// Server Port
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});