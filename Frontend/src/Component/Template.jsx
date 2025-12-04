import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SIngupForm";

const Template = ({ title, desc1, desc2, formtype, setIsloggin }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center  from-indigo-600 via-purple-600 to-pink-600 px-4">

      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl px-8 py-10 animate-fadeIn">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
          {title}
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 mb-6 text-sm leading-tight">
          {desc1} <br /> {desc2}
        </p>

        {/* Form */}
        {formtype === "singup" ? (
          <SignupForm setIsloggin={setIsloggin} />
        ) : (
          <LoginForm setIsloggin={setIsloggin} />
        )}

        {/* OR Divider */}
        <div className="w-full flex items-center gap-3 my-5">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <p className="text-gray-500 font-medium text-sm">OR</p>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-3 rounded-lg shadow-sm hover:shadow-md transition font-semibold text-gray-700"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-6 h-6"
          />
          <p>{formtype === "singup" ? "Sign Up with Google" : "Login with Google"}</p>
        </button>
      </div>
    </div>
  );
};

export default Template;
