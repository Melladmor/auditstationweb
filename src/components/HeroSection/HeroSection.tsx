import React from "react";
import Ads from "./Ads/Ads";
import Statistics from "./Statistics/Statistics";

function HeroSection() {
  return (
    <div>
      <div className="relative">
        <Ads />
        <Statistics />
      </div>
      <div className="xl:h-[272px] lg:h-[272px] md:h-[472px] sm:h-[650px] xs:h-[650px] bg-light-bodyBg dark:bg-dark-bodyBg"></div>
    </div>
  );
}

export default HeroSection;
