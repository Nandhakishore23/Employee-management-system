import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Employee Management System</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-employee">Add Employee</Link>
      </div>
    </nav>
  );
};

export default Navbar;
