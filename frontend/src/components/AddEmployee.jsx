import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    employeeID: "",
    email: "",
    phone: "",
    department: "",
    dateOfJoining: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const nameRegex = /^[a-zA-Z.-]+$/;

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required.";
        else if (!nameRegex.test(value)) error = "Invalid Name format.";
        break;
      case "employeeID":
        if (!value.trim()) error = "Employee ID is required.";
        else if (value.length > 10) error = "Must not exceed 10 characters.";
        break;
      case "email":
        if (!value.trim()) error = "Email is required.";
        else if (!emailRegex.test(value)) error = "Invalid email format.";
        break;
      case "phone":
        if (!value.trim()) error = "Phone number is required.";
        else if (!phoneRegex.test(value)) error = "Must be a valid 10-digit number.";
        break;
      case "department":
        if (!value.trim()) error = "Department is required.";
        break;
      case "dateOfJoining":
        if (!value.trim()) error = "Date of Joining is required.";
        else if (new Date(value) > new Date()) error = "Cannot be in the future.";
        break;
      case "role":
        if (!value.trim()) error = "Role is required.";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Object.keys(formData).forEach((key) => validateField(key, formData[key]));

    if (Object.values(errors).some((error) => error)) return;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/employees/add",
        formData
      );
      toast.success(response.data.message || "Employee added successfully!");
      handleReset(); // Reset the form after successful submission
    } catch (error) {
      toast.error(error.response?.data?.error || "An error occurred.");
    }
  };

  // Reset function to clear the form
  const handleReset = () => {
    setFormData({
      name: "",
      employeeID: "",
      email: "",
      phone: "",
      department: "",
      dateOfJoining: "",
      role: "",
    });
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <ToastContainer position="top-center" autoClose={3000} />
      <h2 className="text-2xl font-bold text-center mb-6">Add Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Fields */}
        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Employee ID", name: "employeeID", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone", name: "phone", type: "text" },
          { label: "Role", name: "role", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className={`mt-1 w-full px-3 py-2 border ${
                errors[name] ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                errors[name] ? "focus:ring-red-500" : "focus:ring-indigo-500"
              }`}
            />
            {errors[name] && (
              <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
            )}
          </div>
        ))}

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Department
          </label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Developer">Developer</option>
            <option value="Marketing">Marketing</option>
            <option value="Tester">Tester</option>
          </select>
          {errors.department && (
            <p className="text-red-500 text-sm mt-1">{errors.department}</p>
          )}
        </div>

        {/* Date of Joining */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Joining
          </label>
          <input
            type="date"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.dateOfJoining && (
            <p className="text-red-500 text-sm mt-1">{errors.dateOfJoining}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="py-2 px-4 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
