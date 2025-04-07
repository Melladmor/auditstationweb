"use client";

import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { InputPropsI } from "./type";
import { IoMdEyeOff } from "react-icons/io";

const Password: React.FC<InputPropsI> = ({
  label,
  placeholder = "",
  className = "",
  disabled = false,
  required = false,
  register,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="text-[#091219] dark:text-dark-text text-[14px] font-medium mb-2 block">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          {...register}
          className={`w-full p-[16px] h-[56px] pr-[48px] bg-[rgba(255,255,255,0.64)] focus:outline-none rounded-[8px] ${
            error ? "border-red-500 ring-red-300" : ""
          }`}
        />
        <button
          type="button"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#091219] dark:text-dark-text"
          onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <IoMdEyeOff size={20} className="text-[#757575]" />
          ) : (
            <IoEye size={20} className="text-[#757575]" />
          )}
        </button>
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Password;
