import React from "react";
import AdsSlider from "./AdsSlider";
import { SlideI } from "./type";

const Ads = () => {
  const adsData: SlideI[] = [
    {
      id: 1,
      image: "/images/slide.jpg",
      title: "Driving Financial Success with Precision",
      subTitle:
        "At Audit Station, we combine industry expertise with innovative solutions to help businesses optimize their financial operations. From auditing to tax planning.",
    },
    {
      id: 2,
      image: "/images/slide2.jpg",
      title: "Driving Financial Success with Precision",
      subTitle:
        "At Audit Station, we combine industry expertise with innovative solutions to help businesses optimize their financial operations. From auditing to tax planning.",
    },
    {
      id: 3,
      image: "/images/slide.jpg",
      title: "Driving Financial Success with Precision",
      subTitle:
        "At Audit Station, we combine industry expertise with innovative solutions to help businesses optimize their financial operations. From auditing to tax planning.",
    },
    {
      id: 4,
      image: "/images/slide2.jpg",
      title: "Driving Financial Success with Precision",
      subTitle:
        "At Audit Station, we combine industry expertise with innovative solutions to help businesses optimize their financial operations. From auditing to tax planning.",
    },
    {
      id: 5,
      image: "/images/slide.jpg",
      title: "Driving Financial Success with Precision",
      subTitle:
        "At Audit Station, we combine industry expertise with innovative solutions to help businesses optimize their financial operations. From auditing to tax planning.",
    },
  ];
  return <AdsSlider data={adsData} />;
};

export default Ads;
