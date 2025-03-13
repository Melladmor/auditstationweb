"use Client";
import React from "react";
import { StatisticsI } from "./type.d";
import CountUp from "react-countup";

type Props = {
  cardData: StatisticsI;
  isLast: boolean;
};

const StatisticsCard = ({ cardData, isLast }: Props) => {
  return (
    <div
      className={`w-full  xl:h-[124px] lg:h-[124px] md:h-[118px] sm:h-[110px] xs:h-[110px]  flex flex-col items-center justify-center border-[#B8C1CD]  xl:border-r lg:border-r xl:border-b-0 lg:border-b-0 md:border-b md:border-r-0 sm:border-b sm:border-r-0 xs:border-b xs:border-r-0  ${
        isLast
          ? "lg:col-span-1 md:col-span-2 sm:col-span-1 xs:col-span-1 border-none"
          : ""
      }`}>
      <div className="xl:text-[40px] lg:text-[36px] md:text-[32px] sm:text-[28px] xs:text-[28px]  text-secondary font-[700]">
        {cardData.end ? (
          <CountUp start={cardData.start} end={cardData.end} duration={3} />
        ) : (
          ""
        )}{" "}
        {cardData?.value}
      </div>
      <div className="text-light-text dark:text-dark-text xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[14px] xs:text-[14px] font-[400]  text-center">
        {cardData?.title}
      </div>
    </div>
  );
};

export default StatisticsCard;
