// // // import React, { useState } from "react";
// // // import axios from "axios";

// // // const AddEmployee = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     employeeID: "",
// // //     email: "",
// // //     phone: "",
// // //     department: "",
// // //     dateOfJoining: "",
// // //     role: "",
// // //   });

// // //   const [errors, setErrors] = useState({});
// // //   const [message, setMessage] = useState("");

// // //   const validateForm = () => {
// // //     let errors = {};
// // //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // //     const phoneRegex = /^[0-9]{10}$/;

// // //     // Name validation
// // //     if (!formData.name) errors.name = "Name is required.";

// // //     // Employee ID validation
// // //     if (!formData.employeeID) errors.employeeID = "Employee ID is required.";
// // //     else if (formData.employeeID.length > 10)
// // //       errors.employeeID = "Employee ID must not exceed 10 characters.";

// // //     // Email validation
// // //     if (!formData.email) errors.email = "Email is required.";
// // //     else if (!emailRegex.test(formData.email))
// // //       errors.email = "Invalid email format.";

// // //     // Phone validation
// // //     if (!formData.phone) errors.phone = "Phone number is required.";
// // //     else if (!phoneRegex.test(formData.phone))
// // //       errors.phone = "Phone number must be a valid 10-digit number.";

// // //     // Department validation
// // //     if (!formData.department) errors.department = "Department is required.";

// // //     // Date of Joining validation
// // //     if (!formData.dateOfJoining)
// // //       errors.dateOfJoining = "Date of Joining is required.";
// // //     else if (new Date(formData.dateOfJoining) > new Date())
// // //       errors.dateOfJoining = "Date of Joining cannot be in the future.";

// // //     // Role validation
// // //     if (!formData.role) errors.role = "Role is required.";

// // //     setErrors(errors);
// // //     return Object.keys(errors).length === 0;
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!validateForm()) return;

// // //     try {
// // //       const response = await axios.post(
// // //         "http://localhost:5000/api/employees/add",
// // //         formData
// // //       );
// // //       setMessage(response.data.message);
// // //       setFormData({
// // //         name: "",
// // //         employeeID: "",
// // //         email: "",
// // //         phone: "",
// // //         department: "",
// // //         dateOfJoining: "",
// // //         role: "",
// // //       });
// // //     } catch (error) {
// // //       setMessage(error.response?.data?.error || "An error occurred.");
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Add Employee</h2>
// // //       {message && <p>{message}</p>}
// // //       <form onSubmit={handleSubmit}>
// // //         <div>
// // //           <label>Name:</label>
// // //           <input
// // //             type="text"
// // //             value={formData.name}
// // //             onChange={(e) =>
// // //               setFormData({ ...formData, name: e.target.value })
// // //             }
// // //           />
// // //           {errors.name && <span>{errors.name}</span>}
// // //         </div>
// // //         <div>
// // //           <label>Employee ID:</label>
// // //           <input
// // //             type="text"
// // //             value={formData.employeeID}
// // //             onChange={(e) =>
// // //               setFormData({ ...formData, employeeID: e.target.value })
// // //             }
// // //           />
// // //           {errors.employeeID && <span>{errors.employeeID}</span>}
// // //         </div>
// // //         <div>
// // //           <label>Email:</label>
// // //           <input
// // //             type="email"
// // //             value={formData.email}
// // //             onChange={(e) =>
// // //               setFormData({ ...formData, email: e.target.value })
// // //             }
// // //           />
// // //           {errors.email && <span>{errors.email}</span>}
// // //         </div>
// // //         <div>
// // //           <label>Phone:</label>
// // //           <input
// // //             type="text"
// // //             value={formData.phone}
// // //             onChange={(e) =>
// // //               setFormData({ ...formData, phone: e.target.value })
// // //             }
// // //           />
// // //           {errors.phone && <span>{errors.phone}</span>}
// // //         </div>
// // //         <div>
// // //           <label>Department:</label>
// // //           <select
// // //             value={formData.department}
// // //             onChange={(e) =>
// // //               setFormData({ ...formData, department: e.target.value })
// // //             }
// // //           >
// // //             <option value="">Select Department</option>
// // //             <option value="HR">HR</option>
// // //             <option value="Engineering">Engineering</option>
// // //             <option value="Marketing">Marketing</option>
// // //           </select>
// // //           {errors.department && <span>{errors.department}</span>}
// // //         </div>
// // //         <div>
// // //           <label>Date of Joining:</label>
// // //           <input
// // //             type="date"
// // //             value={formData.dateOfJoining}
// // //             onChange={(e) =>
// // //               setFormData({ ...formData, dateOfJoining: e.target.value })
// // //             }
// // //           />
// // //           {errors.dateOfJoining && <span>{errors.dateOfJoining}</span>}
// // //         </div>
// // //         <div>
// // //           <label>Role:</label>
// // //           <input
// // //             type="text"
// // //             value={formData.role}
// // //             onChange={(e) =>
// // //               setFormData({ ...formData, role: e.target.value })
// // //             }
// // //           />
// // //           {errors.role && <span>{errors.role}</span>}
// // //         </div>
// // //         <button type="submit">Submit</button>
// // //         <button
// // //           type="button"
// // //           onClick={() =>
// // //             setFormData({
// // //               name: "",
// // //               employeeID: "",
// // //               email: "",
// // //               phone: "",
// // //               department: "",
// // //               dateOfJoining: "",
// // //               role: "",
// // //             })
// // //           }
// // //         >
// // //           Reset
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default AddEmployee;

// // import React, { useState } from "react";
// // import axios from "axios";

// // const AddEmployee = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     employeeID: "",
// //     email: "",
// //     phone: "",
// //     department: "",
// //     dateOfJoining: "",
// //     role: "",
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [message, setMessage] = useState("");

// //   // Field-specific validation
// //   const validateField = (name, value) => {
// //     let error = "";
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     const phoneRegex = /^[0-9]{10}$/;

// //     switch (name) {
// //       case "name":
// //         if (!value.trim()) error = "Name is required.";
// //         break;
// //       case "employeeID":
// //         if (!value.trim()) error = "Employee ID is required.";
// //         else if (value.length > 10) error = "Must not exceed 10 characters.";
// //         break;
// //       case "email":
// //         if (!value.trim()) error = "Email is required.";
// //         else if (!emailRegex.test(value)) error = "Invalid email format.";
// //         break;
// //       case "phone":
// //         if (!value.trim()) error = "Phone number is required.";
// //         else if (!phoneRegex.test(value)) error = "Must be a valid 10-digit number.";
// //         break;
// //       case "department":
// //         if (!value.trim()) error = "Department is required.";
// //         break;
// //       case "dateOfJoining":
// //         if (!value.trim()) error = "Date of Joining is required.";
// //         else if (new Date(value) > new Date()) error = "Cannot be in the future.";
// //         break;
// //       case "role":
// //         if (!value.trim()) error = "Role is required.";
// //         break;
// //       default:
// //         break;
// //     }
// //     setErrors((prev) => ({ ...prev, [name]: error }));
// //   };

// //   // Handle input change and validate
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //     validateField(name, value);
// //   };

// //   // Form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setMessage("");

// //     // Validate all fields before submission
// //     Object.keys(formData).forEach((key) => validateField(key, formData[key]));

// //     // Check if there are any errors
// //     if (Object.values(errors).some((error) => error)) return;

// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5000/api/employees/add",
// //         formData
// //       );
// //       setMessage({ type: "success", text: response.data.message });
// //       setFormData({
// //         name: "",
// //         employeeID: "",
// //         email: "",
// //         phone: "",
// //         department: "",
// //         dateOfJoining: "",
// //         role: "",
// //       });
// //       setErrors({});
// //     } catch (error) {
// //       setMessage({
// //         type: "error",
// //         text: error.response?.data?.error || "An error occurred.",
// //       });
// //     }
// //   };

// //   return (
// //     <div className="form-container">
// //       <h2>Add Employee</h2>
// //       {message && (
// //         <p className={`message ${message.type === "success" ? "success" : "error"}`}>
// //           {message.text}
// //         </p>
// //       )}
// //       <form onSubmit={handleSubmit}>
// //         {/* Name Field */}
// //         <div className="form-group">
// //           <label>Name:</label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //           />
// //           {errors.name && <span className="error-text">{errors.name}</span>}
// //         </div>

// //         {/* Employee ID */}
// //         <div className="form-group">
// //           <label>Employee ID:</label>
// //           <input
// //             type="text"
// //             name="employeeID"
// //             value={formData.employeeID}
// //             onChange={handleChange}
// //           />
// //           {errors.employeeID && <span className="error-text">{errors.employeeID}</span>}
// //         </div>

// //         {/* Email */}
// //         <div className="form-group">
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //           />
// //           {errors.email && <span className="error-text">{errors.email}</span>}
// //         </div>

// //         {/* Phone */}
// //         <div className="form-group">
// //           <label>Phone:</label>
// //           <input
// //             type="text"
// //             name="phone"
// //             value={formData.phone}
// //             onChange={handleChange}
// //           />
// //           {errors.phone && <span className="error-text">{errors.phone}</span>}
// //         </div>

// //         {/* Department */}
// //         <div className="form-group">
// //           <label>Department:</label>
// //           <select
// //             name="department"
// //             value={formData.department}
// //             onChange={handleChange}
// //           >
// //             <option value="">Select Department</option>
// //             <option value="HR">HR</option>
// //             <option value="Engineering">Engineering</option>
// //             <option value="Marketing">Marketing</option>
// //           </select>
// //           {errors.department && <span className="error-text">{errors.department}</span>}
// //         </div>

// //         {/* Date of Joining */}
// //         <div className="form-group">
// //           <label>Date of Joining:</label>
// //           <input
// //             type="date"
// //             name="dateOfJoining"
// //             value={formData.dateOfJoining}
// //             onChange={handleChange}
// //           />
// //           {errors.dateOfJoining && <span className="error-text">{errors.dateOfJoining}</span>}
// //         </div>

// //         {/* Role */}
// //         <div className="form-group">
// //           <label>Role:</label>
// //           <input
// //             type="text"
// //             name="role"
// //             value={formData.role}
// //             onChange={handleChange}
// //           />
// //           {errors.role && <span className="error-text">{errors.role}</span>}
// //         </div>

// //         {/* Buttons */}
// //         <div className="form-buttons">
// //           <button type="submit">Submit</button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddEmployee;


// import React, { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import styles for toast

// const AddEmployee = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     employeeID: "",
//     email: "",
//     phone: "",
//     department: "",
//     dateOfJoining: "",
//     role: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Field-specific validation
//   const validateField = (name, value) => {
//     let error = "";
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10}$/;

//     switch (name) {
//       case "name":
//         if (!value.trim()) error = "Name is required.";
//         break;
//       case "employeeID":
//         if (!value.trim()) error = "Employee ID is required.";
//         else if (value.length > 10) error = "Must not exceed 10 characters.";
//         break;
//       case "email":
//         if (!value.trim()) error = "Email is required.";
//         else if (!emailRegex.test(value)) error = "Invalid email format.";
//         break;
//       case "phone":
//         if (!value.trim()) error = "Phone number is required.";
//         else if (!phoneRegex.test(value)) error = "Must be a valid 10-digit number.";
//         break;
//       case "department":
//         if (!value.trim()) error = "Department is required.";
//         break;
//       case "dateOfJoining":
//         if (!value.trim()) error = "Date of Joining is required.";
//         else if (new Date(value) > new Date()) error = "Cannot be in the future.";
//         break;
//       case "role":
//         if (!value.trim()) error = "Role is required.";
//         break;
//       default:
//         break;
//     }
//     setErrors((prev) => ({ ...prev, [name]: error }));
//   };

//   // Handle input change and validate
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     validateField(name, value);
//   };

//   // Form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate all fields before submission
//     Object.keys(formData).forEach((key) => validateField(key, formData[key]));

//     // Check if there are any errors
//     if (Object.values(errors).some((error) => error)) return;

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/employees/add",
//         formData
//       );
//       // Show success toast
//       toast.success(response.data.message || "Employee added successfully!");
//       // Reset form
//       setFormData({
//         name: "",
//         employeeID: "",
//         email: "",
//         phone: "",
//         department: "",
//         dateOfJoining: "",
//         role: "",
//       });
//       setErrors({});
//     } catch (error) {
//       // Show error toast
//       toast.error(error.response?.data?.error || "An error occurred.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <ToastContainer position="top-center" autoClose={3000} />
//       <h2>Add Employee</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Name Field */}
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {errors.name && <span className="error-text">{errors.name}</span>}
//         </div>

//         {/* Employee ID */}
//         <div className="form-group">
//           <label>Employee ID:</label>
//           <input
//             type="text"
//             name="employeeID"
//             value={formData.employeeID}
//             onChange={handleChange}
//           />
//           {errors.employeeID && <span className="error-text">{errors.employeeID}</span>}
//         </div>

//         {/* Email */}
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <span className="error-text">{errors.email}</span>}
//         </div>

//         {/* Phone */}
//         <div className="form-group">
//           <label>Phone:</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//           {errors.phone && <span className="error-text">{errors.phone}</span>}
//         </div>

//         {/* Department */}
//         <div className="form-group">
//           <label>Department:</label>
//           <select
//             name="department"
//             value={formData.department}
//             onChange={handleChange}
//           >
//             <option value="">Select Department</option>
//             <option value="HR">HR</option>
//             <option value="Engineering">Engineering</option>
//             <option value="Marketing">Marketing</option>
//           </select>
//           {errors.department && <span className="error-text">{errors.department}</span>}
//         </div>

//         {/* Date of Joining */}
//         <div className="form-group">
//           <label>Date of Joining:</label>
//           <input
//             type="date"
//             name="dateOfJoining"
//             value={formData.dateOfJoining}
//             onChange={handleChange}
//           />
//           {errors.dateOfJoining && <span className="error-text">{errors.dateOfJoining}</span>}
//         </div>

//         {/* Role */}
//         <div className="form-group">
//           <label>Role:</label>
//           <input
//             type="text"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//           />
//           {errors.role && <span className="error-text">{errors.role}</span>}
//         </div>

//         {/* Buttons */}
//         <div className="form-buttons">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddEmployee;


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
    } catch (error) {
      toast.error(error.response?.data?.error || "An error occurred.");
    }
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
