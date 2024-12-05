const express = require("express");
const mysql = require("mysql2");
const router = express.Router();

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employeeDB",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to the database.");
  }
});

// Route: Add Employee
router.post("/add", (req, res) => {
  const { name, employeeID, email, phone, department, dateOfJoining, role } = req.body;

  // Backend Validation
  if (!name || !employeeID || !email || !phone || !department || !dateOfJoining || !role) {
    return res.status(400).json({ error: "All fields are mandatory." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const nameRegex = /^[a-zA-Z.-]+$/;

  if (!nameRegex.test(email)) {
    return res.status(400).json({ error: "Invalid Name format." });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: "Phone number must be a valid 10-digit number." });
  }

  if (new Date(dateOfJoining) > new Date()) {
    return res.status(400).json({ error: "Date of Joining cannot be in the future." });
  }

  // Check for unique Employee ID and Email
  const query = "SELECT * FROM employees WHERE employee_id = ? OR email = ?";
  db.query(query, [employeeID, email], (err, results) => {
    if (err) return res.status(500).json({ error: "Database error." });

    if (results.length > 0) {
      return res.status(400).json({ error: "Employee ID or Email already exists." });
    }

    // Insert into database
    const insertQuery = `
      INSERT INTO employees (name, employee_id, email, phone_number, department, date_of_joining, role) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(insertQuery, [name, employeeID, email, phone, department, dateOfJoining, role], (err) => {
      if (err) return res.status(500).json({ error: "Database error." });

      res.status(200).json({ message: "Employee added successfully." });
    });
  });
});

module.exports = router;
