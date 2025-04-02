"use client";
import React from "react";
import { PackagesI } from "./type";
import Slider from "@/components/Slider/Slider";
import PackagesCard from "./PackagesCard";

type Props = {
  data: PackagesI[];
};

const PackagesContainer = ({ data }: Props) => {
  return (
    <div>
      <Slider
        initialData={data}
        slidePerViewLg={4}
        slidePerViewMd={3}
        spaceBetween={30}
        renderItem={(item) => {
          return <PackagesCard key={item?.id} {...item} />;
        }}
      />
    </div>
  );
};

export default PackagesContainer;
