"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Registerform() {
  const [formData, setFormData] = useState({
    f_name: "",
    m_name: "",
    l_name: "",
    password: "",
    address: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const valideForm = () => {
    const newErrors = {};
    if (!formData.f_name) newErrors.f_name = "First name is required";
    if (!formData.l_name) newErrors.m_name = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) {newErrors.phone = "Phone number is required";}
    else if(formData.phone.length<10){
        newErrors.phone = "Invalid phone number length"
    }
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else if (!/(?=.*[a-z])/.test(formData.password)) {
      newErrors.password =
        "Password must include at least one lowercase letter";
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password =
        "Password must include at least one uppercase letter";
    } else if (!/(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password must include at least one number";
    } else if (!/(?=.*[@$!%*?&])/.test(formData.password)) {
      newErrors.password =
        "Password must include at least one special character";
    }
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = valideForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      //API  calll code here
      try{
        const response = await fetch('http://localhost:5000/api/users/registerUser',{
          method:"POST",
          headers:{
            "Content-Type":'application/json'
          },
          body:JSON.stringify(formData)
        })
        if(response.ok){
          alert("Registration successful!")
          router.push('./login')
        }
        else{
          alert("Registration failed. Please try again.");
        }

      }
      catch(error){
        console.error("Error:",error);
        alert("An error occurred. Please try again.")
      }
    
  }
     
   
  };
  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Create an Account
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
        <label htmlFor="f_name" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
          required
            type="text"
            id="f_name"
            name='f_name'
            value={formData.f_name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your first name"
          ></input>
          {errors.f_name &&  <label htmlFor="f_name" className="block text-sm font-medium text-gray-700">First Name</label>}
        </div>
        <div className="mb-4">
          <label htmlFor="m_name" className="block text-sm font-medium text-gray-700">Middle Name (Optional)</label>
          <input
            type="text"
            id="m_name"
            name="m_name"
            value={formData.m_name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your middle name (if any)"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="l_name" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="l_name"
            name="l_name"
            value={formData.l_name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your last name"
          />
          {errors.l_name && <p className="text-red-500 text-sm">{errors.l_name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your address"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <button type="submit" className="w-full bg-primary-color text-white py-2 rounded mt-4">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registerform;
