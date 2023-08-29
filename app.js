const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");


const bankRoutes = require("./routes/bankAccount");

app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/bankAccount", bankRoutes);

module.exports = app;
