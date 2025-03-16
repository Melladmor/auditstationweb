import React from "react";
import { TitleI } from "./type";
import TitleIcon from "./TitleIcon";

type Props = TitleI;

const Title = ({ first, second, subTitle, className }: Props) => {
  return (
    <div
      className={`mb-[32px] flex flex-col xl:gap-[32px] lg:gap-[32px] md:gap-[28px] sm:gap-[24px] xs:gap-[15px] justify-center items-center ${className}`}>
      <div className="flex flex-row flex-nowrap gap-[16px] items-center">
        <TitleIcon />
        <h1 className="xl:text-[32px] lg:xt-[30px] md:text-[24px] sm:text-[20px] xs:text-[20px] font-[700] capitalize">
          <span className="text-light-text dark:text-dark-text">{first}</span>{" "}
          <span className="text-secondary">{second}</span>
        </h1>
      </div>
      {subTitle && (
        <p className="xl:px-[150px] lg:px-[140px] md:px-[60px] sm:px-[30px] xs:px-0 xl:text-[24px] lg:text-[24px] md:text-[18px] sm:text-[16px] xs:text-[16px] font-[400]  text-center text-light-text dark:text-dark-text">
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Title;
