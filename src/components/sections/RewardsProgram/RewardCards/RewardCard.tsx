import Image from "next/image";
import React from "react";
import { RewardCardsI } from "./type";

type Props = RewardCardsI;

const RewardCard = ({ title, subTitle, image }: Props) => {
  return (
    <div className="bg-light-background dark:bg-dark-background xl:min-w-[302px] lg:min-w-[302px] md:min-w-[302px] sm:min-w-full xs:min-w-full shadow-light border-b-[3px] border-secondary">
      <Image
        src={image}
        alt=""
        width={100}
        height={100}
        loading="lazy"
        className="h-[174px] w-full object-fill"
      />
      <div className="p-4 text-light-text dark:text-dark-text flex flex-col gap-2">
        <h4 className="xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[16px] font-medium">
          {title}
        </h4>
        <p className="xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px]">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default RewardCard;
