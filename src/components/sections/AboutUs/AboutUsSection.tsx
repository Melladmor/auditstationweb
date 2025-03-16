import React from "react";
import AboutUsSectionContainer from "./AboutUsSectionContainer";
import { getTranslations } from "next-intl/server";
import CustomSection from "@/components/CustomSection/CustomSection";

const AboutUsSection = async () => {
  const t = await getTranslations("sections.aboutussection");
  return (
    <CustomSection className="py-[100px]">
      <AboutUsSectionContainer
        first={t("first")}
        second={t("second")}
        description="We are one of the leading and most trusted accounting firms in the middle east. We redefine the industry by our auditing and accounting solutions designed specially to meet your business needs. We do that while keeping a satisfaction rate of 100% by all our 200+ clients all over the world, especially in the GCC countries.     Our aim to your business succeeds financially using state of the art accounting solutions and proper softwares custom built for each company to meet their current and future needs, ensuring their success and excellence in every financial step."
        title=""
        video=""
      />
    </CustomSection>
  );
};

export default AboutUsSection;
