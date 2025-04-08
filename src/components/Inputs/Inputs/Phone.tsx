"use client";

import React from "react";
import Image from "next/image";
import PhoneInput, { CountryData } from "react-phone-input-2";
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
  const handleChange = (phone: string, country: CountryData) => {
    const cleanedPhone = phone.startsWith(country.dialCode)
      ? phone
      : `${country.dialCode}${phone.replace(/^0+/, "")}`;
    const fullValue = `+${cleanedPhone}`;
    if (onChange) {
      onChange?.(fullValue);
    }

    if (register) {
      register.onChange({ target: { value: fullValue } });
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
          <div className="xl:w-[64px] lg:w-[64px] md:w-[54px] sm:w-[44px] xs:w-[44px] xl:p-[16px] lg:p-[16px] md:p-[10px] sm:p-[11px] xs:p-[11px] xl:h-[56px] lg:h-[56px] md:h-[40px] sm:h-[40px] bg-secondary flex justify-center items-center rounded-[8px_0px_0px_8px]">
            <Image
              src={icon}
              alt="icon"
              width={100}
              height={100}
              className="xl:size-[24px] lg:size-[24px] md:size-[22px] sm:size-[18px] xs:size-[18px]"
            />
          </div>
        )}
        <div className="flex-1 flex flex-col gap-1">
          <PhoneInput
            country="ae"
            value={value}
            onChange={handleChange}
            inputClass="!w-full  xl:!h-[56px] lg:!h-[56px] md:!h-[40px] sm:!h-[40px] xs:!h-[40px] !rounded-[8px] !bg-[#e9f8e7] !text-sm !border-none !pl-[58px]  focus:!outline-none"
            buttonClass="!bg-[#e9f8e7] !border-none !rounded-full"
            containerClass={`!bg-[#e9f8e7] ${
              error ? "!border !border-red-500" : ""
            }`}
            disabled={disabled}
          />
        </div>
      </div>
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Phone;
