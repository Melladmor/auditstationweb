"use client";
import React from "react";
import { StatisticsI } from "./type.d";
import StatisticsCard from "./StatisticsCard";

function Statistics() {
  const statisticsData: StatisticsI[] = [
    {
      id: 1,
      title: "In The World",
      start: 0,
      end: 1,
    },
    {
      id: 2,
      title: "Years Of Experience",
      start: 0,
      end: 6,
    },
    {
      id: 3,
      value: "+",
      title: "Customers",
      start: 0,
      end: 200,
    },
    {
      id: 4,
      value: "%",
      title: "Satisfaction",
      start: 0,
      end: 100,
    },
    { id: 5, value: "All", title: "Over Gcc" },
  ];

  return (
    <div className="xl:h-[172px] lg:h-[172px] md:h-auto sx:h-auto xs:h-auto w-full px_padding  absolute z-10 lg:bottom-[-30%] md:bottom-[-80%] xs:bottom-[-185%]">
      <div className="bg-[#F2FAEC] px-[24px] py-[16px] w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center">
        {statisticsData.map((el, index) => (
          <StatisticsCard
            key={el.id}
            cardData={el}
            isLast={index === statisticsData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Statistics;
