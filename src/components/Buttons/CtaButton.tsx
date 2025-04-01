"use client";

import React from "react";
import { ButtonI } from "./type";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = ButtonI;

const CtaButton = ({ onClick, title, className, icon, isLoading }: Props) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
      className="h-[40px] flex justify-center items-center ltr:pl-[16px] ltr:pr-[32px] rtl:pr-[16px] rtl:pl-[32px] py-[8px] cta_rouned bg-secondary  text-white text-[16px] relative">
      {title}
      <div className="absolute top-0 ltr:right-[-10px] rtl:left-[-10px]  h-[40px] w-[40px] rounded-full bg-secondary border-white border-[1px] shadow-cta_button flex items-center justify-center text-white">
        <FaArrowRightLong className="rtl:rotate-[180deg]" />
      </div>
    </button>
  );
};

export default CtaButton;
