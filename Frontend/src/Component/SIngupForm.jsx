import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignupForm = ({ setIsloggin }) => {
  const nav = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

  const [accountType, setAccountType] = useState("student");

  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(e) {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsloggin(true);
    nav("/dashbord");
  }

  function handleBack() {
    nav(-1);
  }

  return (
    <div className="w-full flex flex-col gap-5 animate-fadeIn ">

      {/* ⭐ Account Type Tabs (Matches Template Style) */}
      <div className="flex w-full border rounded-lg overflow-hidden bg-gray-200">
        <button
          type="button"
          onClick={() => setAccountType("student")}
          className={`w-1/2 py-3 font-semibold transition 
            ${
              accountType === "student"
                ? "bg-indigo-600 text-white"
                : "text-gray-700 hover:bg-gray-300"
            }`}
        >
          Student
        </button>

        <button
          type="button"
          onClick={() => setAccountType("instructor")}
          className={`w-1/2 py-3 font-semibold transition 
            ${
              accountType === "instructor"
                ? "bg-indigo-600 text-white"
                : "text-gray-700 hover:bg-gray-300"
            }`}
        >
          Instructor
        </button>
      </div>

      {/* ⭐ FORM START */}
      <form onSubmit={submitHandler} className="flex flex-col gap-5">

        {/* First & Last Name */}
        <div className="flex gap-4">
          <label className="w-1/2 flex flex-col gap-1">
            <p className="text-gray-700 font-semibold">
              First Name <sup className="text-red-500">*</sup>
            </p>

            <input
              type="text"
              name="firstName"
              required
              value={formdata.firstName}
              onChange={changeHandler}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              bg-white/70 focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="w-1/2 flex flex-col gap-1">
            <p className="text-gray-700 font-semibold">
              Last Name <sup className="text-red-500">*</sup>
            </p>

            <input
              type="text"
              name="lastName"
              required
              value={formdata.lastName}
              onChange={changeHandler}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              bg-white/70 focus:ring-2 focus:ring-indigo-500"
            />
          </label>
        </div>

        {/* Email */}
        <label className="flex flex-col gap-1">
          <p className="text-gray-700 font-semibold">
            Email <sup className="text-red-500">*</sup>
          </p>

          <input
            type="email"
            name="email"
            required
            value={formdata.email}
            onChange={changeHandler}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            bg-white/70 focus:ring-2 focus:ring-indigo-500"
          />
        </label>

        {/* Password */}
        <label className="flex flex-col gap-1 relative">
          <p className="text-gray-700 font-semibold">
            Password <sup className="text-red-500">*</sup>
          </p>

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            value={formdata.password}
            onChange={changeHandler}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            bg-white/70 focus:ring-2 focus:ring-indigo-500"
          />

          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[45px] cursor-pointer text-gray-600"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </label>

        {/* Confirm Password */}
        <label className="flex flex-col gap-1 relative">
          <p className="text-gray-700 font-semibold">
            Confirm Password <sup className="text-red-500">*</sup>
          </p>

          <input
            type={showConPassword ? "text" : "password"}
            name="confirmPassword"
            required
            value={formdata.confirmPassword}
            onChange={changeHandler}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            bg-white/70 focus:ring-2 focus:ring-indigo-500"
          />

          <span
            onClick={() => setShowConPassword((prev) => !prev)}
            className="absolute right-3 top-[45px] cursor-pointer text-gray-600"
          >
            {showConPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </label>

        {/* Submit Button */}
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg 
          font-semibold shadow-md transition">
          Create Account
        </button>

        {/* Back Button */}
        <button
          type="button"
          onClick={handleBack}
          className="w-full bg-gray-700 hover:bg-black text-white py-3 rounded-lg 
          font-semibold shadow-md transition"
        >
          Back
        </button>

      </form>
    </div>
  );
};

export default SignupForm;
