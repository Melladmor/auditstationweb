"use client";

import React from "react";
import Image from "next/image";
import { PhoneInput } from "react-international-phone";
import { InputPropsI } from "../type";

const Phone: React.FC<
  Omit<InputPropsI, "placeholder" | "type" | "name"> & {
    value?: string;
    onChange?: (value: string) => void;
  }
> = ({
  label,
  className = "",
  disabled = false,
  required = false,
  register,
  error,
  icon,
  value,
  onChange,
}) => {
  const handleChange = (phone: string) => {
    if (onChange) {
      onChange?.(phone);
    }
    if (register) {
      register.onChange({ target: { value: phone } });
    }
  };

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
          <div className="xl:w-[64px] lg:w-[64px] md:w-[54px] sm:w-[44px] xs:w-[44px]  xl:h-[56px] lg:h-[56px] md:h-[40px] sm:h-[40px] bg-secondary flex justify-center items-center ltr:rounded-[8px_0px_0px_8px] rtl:rounded-[0px_8px_8px_0px]">
            <Image
              src={icon}
              alt="icon"
              width={100}
              height={100}
              className="xl:size-[24px] lg:size-[24px] md:size-[22px] sm:size-[18px] xs:size-[18px]"
            />
          </div>
        )}
        <PhoneInput
          defaultCountry="ae"
          value={value}
          onChange={(value: string) => handleChange(value)}
          disabled={disabled}
        />
      </div>
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Phone;
