const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use Routes
app.use("/api/employees", employeeRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
