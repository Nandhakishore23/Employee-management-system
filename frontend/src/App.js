import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AddEmployee from "./components/AddEmployee";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes>
    </Router>
  );
};

export default App;
