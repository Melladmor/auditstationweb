import CustomSection from "@/components/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import OurPlatformHead from "./OurPlatformHead";
import { OurPlatformI } from "./type";
import OurPlatformVideo from "./OurPlatformVideo";

const OurPlatform = async () => {
  const t = await getTranslations("sections.ourplatform");
  const ourPlatformData: OurPlatformI = {
    image: "/images/slide.jpg",
    title: "Audit Station ’’Your Gateway to Smart Financial Solutions’’",
    description:
      "Audit Station simplifies auditing and tax consultancy with innovative solutions, ensuring accuracy, compliance, and business growth, We Can empowers businesses with seamless financial management.",
    vedioLink: "/videos/audit.mp4",
  };
  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]">
      <OurPlatformHead
        description={ourPlatformData?.description}
        image={ourPlatformData?.image}
        title={ourPlatformData?.title}
      />
      <OurPlatformVideo videoLink={ourPlatformData.vedioLink} />
    </CustomSection>
  );
};

export default OurPlatform;
