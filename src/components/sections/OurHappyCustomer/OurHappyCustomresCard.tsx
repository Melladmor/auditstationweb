import React from "react";
import { CategoryT, OurHappyCustomersI } from "./type";
import Image from "next/image";

type Props = OurHappyCustomersI;

function OurHappyCustomresCard({
  category,
  description,
  logo,
  title,
  cta,
}: Props) {
  return (
    <div className="bg-light-card dark:bg-dark-card dark:border-dark-border border-[1px] w-[411px] h-[357px] p-[24px] rounded-[20px] shadow-light dark:shadow-dark flex flex-col items-center gap-[16px]">
      <div className="flex items-center justify-center w-full">
        <Image
          width={100}
          height={100}
          alt={logo}
          src={logo}
          loading="lazy"
          className="size-[120px] rounded-full border-light-border border-[1px]"
        />
      </div>
      <div className="flex flex-col gap-[8px] items-center">
        <h2 className="text-light-text dark:text-dark-text text-[16px] font-[700]">
          {title}
        </h2>
        <p>
          {category?.map((cat: CategoryT) => {
            return (
              <span key={cat.id} className="text-[#592A00] text-[14px]">
                {cat.name},{" "}
              </span>
            );
          })}
        </p>
      </div>
      <p className="text-light-text dark:text-dark-text text-[16px] text-center">
        {description}
      </p>
    </div>
  );
}

export default OurHappyCustomresCard;
