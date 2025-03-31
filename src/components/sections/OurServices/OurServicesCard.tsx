import React from "react";
import { OurServicesI, SubServicesT } from "./type";

type Props = {
  data: OurServicesI;
};

const OurServicesCard = ({ data }: Props) => {
  return (
    <div
      className={`h-[548px] p-[24px] rounded-[16px] shadow-light `}
      style={{ background: data.bg }}>
      <div className="flex justify-center items-center mt-[24px] mb-[30px]">
        <h3 className="bg-[#FFF1E6] px-[16px] py-[8px] rounded-[8px] text-[20px] font-medium">
          {data.title}
        </h3>
      </div>
      <ul>
        {data.subServices?.map((el: SubServicesT) => {
          return <li key={el?.id}>{el?.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default OurServicesCard;
