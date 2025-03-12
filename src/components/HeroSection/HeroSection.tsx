import React from "react";
import Ads from "./Ads/Ads";
import Statistics from "./Statistics/Statistics";

function HeroSection() {
  return (
    <div className="relative w-full">
      <Ads />
      <Statistics />
    </div>
  );
}

export default HeroSection;
