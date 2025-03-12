import { Box } from "@chakra-ui/react";
import React from "react";
import { StatisticsI } from "./type.d";
import StatisticsCard from "./StatisticsCard";

type Props = {};

function Statistics({}: Props) {
  const statisticsData: StatisticsI[] = [
    { id: 1, value: "1", title: "In The World" },
    { id: 2, value: "6", title: "Years Of Experience" },
    { id: 3, value: "+200", title: "Customers" },
    { id: 4, value: "100%", title: "Satisfaction" },
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
