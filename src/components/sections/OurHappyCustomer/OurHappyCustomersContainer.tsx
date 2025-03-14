"use client";
import Slider from "@/components/Slider/Slider";
import React from "react";
import OurHappyCustomresCard from "./OurHappyCustomresCard";
import { OurHappyCustomersI } from "./type";

type Props = {
  data: OurHappyCustomersI[];
};
export function OurHappyCustomersContainer({ data }: Props) {
  return (
    <Slider
      initialData={data}
      renderItem={(item) => {
        return <OurHappyCustomresCard key={item?.id} {...item} />;
      }}
    />
  );
}
