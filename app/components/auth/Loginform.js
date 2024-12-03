"use client";
import React from "react";
import { useState } from "react";
function Loginform() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number should be 10 digit";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login sucessfull", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-md p-6 shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Login
      </h2>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
          Phone number:
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-color"
        ></input>
        {errors.phone &&(<p className="text-red-500 mt-1 text-sm">{errors.phone}</p>)}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-color"
        ></input>
        {errors.password &&(<p className="text-red-500 text-sm mt-1">{errors.password}</p>)}
      </div>
      <button  className="bg-primary-color px-4 text-white hover:bg-primary-color-hover py-2 rounded w-full" type="submit">Login</button>
    </form>
  );
}

export default Loginform;
