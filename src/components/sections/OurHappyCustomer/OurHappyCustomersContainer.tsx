"use client";
import Slider from "@/components/Slider/Slider";
import React from "react";
import OurHappyCustomresCard from "./OurHappyCustomresCard";
import { OurHappyCustomersI } from "./type";
import Button from "@/components/Buttons/Button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

type Props = {
  data: OurHappyCustomersI[];
};
export function OurHappyCustomersContainer({ data }: Props) {
  const navigate = useRouter();
  const t = useTranslations();
  return (
    <div>
      <Slider
        initialData={data}
        renderItem={(item) => {
          return <OurHappyCustomresCard key={item?.id} {...item} />;
        }}
      />
      <div className="flex items-center justify-center xl:mt-[32px] lg:mt-[32px] md:mt-[25px] sm:mt-[20px] xs:mt-[20px]">
        <Button
          title={t("seemore")}
          onClick={() => navigate.push("ourhappycustomers")}
        />
      </div>
    </div>
  );
}
