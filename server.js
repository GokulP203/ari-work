equire("dotenv").config();
const express = require("express");
const path = require("path");
const { initializeDatabase } = require("./config/database");
const orderRoutes = require("./routes/orders");
const enquiryRoutes = require("./routes/enquiries");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/orders", orderRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 5000;
initializeDatabase()
  .then(() => {
    console.log("MySQL connected; tables ready");
    app.listen(PORT, () => console.log(Website running: http://localhost:${PORT}));
  })
  .catch(err => {
    console.error("MySQL initialization failed:", err.message);
    process.exit(1);
  });
