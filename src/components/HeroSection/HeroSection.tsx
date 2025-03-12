import React from "react";
import Ads from "./Ads/Ads";
import Statistics from "./Statistics/Statistics";

function HeroSection() {
  return (
    <div className="relative w-full xl:mb-[272px] lg:mb-[272px] md:mb-[472px] sm:mb-[650px] xs:mb-[650px]">
      <Ads />
      <Statistics />
    </div>
  );
}

export default HeroSection;
