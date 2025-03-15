"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import SliderPagination from "./SliderPagination";
import useMediaQuery from "@/hooks/useMediaQuery";

type SliderT<T> = {
  initialData: T[];
  renderItem: (item: T) => React.ReactNode;
};

export default function Slider<T>({ initialData, renderItem }: SliderT<T>) {
  const isSmall = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="relative">
      <Swiper
        slidesPerView={isSmall ? 1 : isTablet ? 2 : 3}
        spaceBetween={20}
        className="xl:h-[380px] lg:h-[380px] md:h-[380px] sm:h-[300px] xs:h-[300px]">
        {initialData?.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
