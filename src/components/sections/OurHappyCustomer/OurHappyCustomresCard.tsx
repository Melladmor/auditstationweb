"use client";
import React from "react";
import { CategoryT, OurHappyCustomersI } from "./type";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

type Props = OurHappyCustomersI;

function OurHappyCustomresCard({
  category,
  description,
  logo,
  title,
  cta,
}: Props) {
  const handleNavigate = () => {
    window.open(cta, "_blank");
  };
  return (
    <div className="xl:w-[411px] xl:h-[357px] lg:w-[411px] lg:h-[357px] md:w-[300px] md:h-auto sm:w-auto sm:h-auto xs:w-auto xs:h-auto xl:p-[24px] lg:p-[24px] md:p-[20px] sm:p-[16px] xs:p-[16px] rounded-[20px] bg-light-card dark:bg-dark-card dark:border-dark-border border-[1px]  shadow-light dark:shadow-dark flex flex-col items-center gap-[16px]">
      <div className="flex items-center justify-center w-full">
        <Image
          width={100}
          height={100}
          alt={logo}
          src={logo}
          loading="lazy"
          className="xl:size-[120px] lg:size-[110px] md:size-[100px] sm:size-[80px] xs:size-[60px] rounded-full border-light-border border-[1px]"
        />
      </div>
      <div className="flex flex-col gap-[8px] items-center">
        <h2 className="xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[14px] text-light-text dark:text-dark-text  font-[700]">
          {title}
        </h2>
        <p>
          {category?.map((cat: CategoryT) => {
            return (
              <span
                key={cat.id}
                className="text-[#592A00] xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[12px] xs:text-[12px] ">
                {cat.name},{" "}
              </span>
            );
          })}
        </p>
      </div>
      <p className="text-light-text dark:text-dark-text xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[14px] text-center">
        {description}
      </p>
      <div className="flex items-center justify-end w-full">
        <div
          onClick={handleNavigate}
          className="xl:w-[40px] xl:h-[40px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] sm:w-[25px] sm:h-[25px] xs:w-[25px] xs:h-[25px] cursor-pointer flex items-center justify-center rounded-full bg-secondary">
          <FaArrowRight className="xl:size-4 lg:size-4 md:size-4 sm:size-3 xs:size-3 text-white" />
        </div>
      </div>
    </div>
  );
}

export default OurHappyCustomresCard;
