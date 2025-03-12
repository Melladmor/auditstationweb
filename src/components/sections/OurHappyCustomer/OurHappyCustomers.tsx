import CustomSection from "@/components/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";

const OurHappyCustomers = async () => {
  const t = await getTranslations("sections.ourhappycustomers");
  return (
    <div>
      {" "}
      <CustomSection
        title={{
          first: t("first"),
          second: t("second"),
          subTitle: t("subTitle"),
        }}>
        s
      </CustomSection>
    </div>
  );
};

export default OurHappyCustomers;
