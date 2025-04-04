"use client";

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import useMediaQuery from "@/hooks/useMediaQuery";

type SliderT<T> = {
  initialData: T[];
  renderItem: (item: T) => React.ReactNode;
  slidePerViewMd?: number;
  slidePerViewLg?: number;
  slidePerViewXl?: number;
  spaceBetween?: number;
};

export default function Slider<T>({
  initialData,
  renderItem,
  slidePerViewMd,
  slidePerViewLg,
  slidePerViewXl,
  spaceBetween = 20,
}: SliderT<T>) {
  const isSmall = useMediaQuery("(max-width: 767px)");
  const isMedium = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isLarge = useMediaQuery("(min-width: 1024px) and (max-width: 1124px)");
  const isXLarge = useMediaQuery("(min-width: 1125px)");

  const slidesPerView = useMemo(() => {
    if (isSmall) return 1;
    if (isMedium) return slidePerViewMd || 2;
    if (isLarge) return slidePerViewLg || 3;
    if (isXLarge) return slidePerViewXl || 4;
    return 1;
  }, [isSmall, isMedium, isLarge, isXLarge, slidePerViewMd, slidePerViewLg]);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        // modules={[Autoplay]}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}>
        {initialData.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
