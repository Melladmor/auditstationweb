"use client";

import React from "react";
import { InputPropsI } from "./type";
import Image from "next/image";

const Input: React.FC<InputPropsI> = ({
  label,
  type = "text",
  placeholder = "",
  className = "",
  disabled = false,
  required = false,
  register,
  error,
  icon,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="text-[#091219] dark:text-dark-text text-[14px] font-medium mb-2 block">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="flex w-full items-center">
        {icon && (
          <div className="w-[64px] p-[16px] h-[56px] bg-secondary flex justify-center items-center rounded-[8px_0px_0px_8px]">
            <Image
              src={icon}
              alt="icon"
              width={100}
              height={100}
              className="size-[24px]"
            />
          </div>
        )}
        <div className="flex-1 flex flex-col gap-1">
          <input
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            {...register}
            className={`w-full p-[16px] h-[56px] bg-[rgba(255,255,255,0.64)] focus:outline-none rounded-[${
              icon ? "0px_8px_8px_0px" : "8px"
            }] ${error ? "border-red-500 ring-red-300" : ""}`}
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Input;
