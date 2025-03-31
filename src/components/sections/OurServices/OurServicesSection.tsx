import Title from "@/components/Title/Title";
import { getTranslations } from "next-intl/server";
import React from "react";
import { OurServicesI } from "./type";
import OurServicesCard from "./OurServicesCard";
import CustomSection from "@/components/CustomSection/CustomSection";
import Image from "next/image";

const OurServicesSection = async () => {
  const t = await getTranslations("sections.ourservices");
  const ourServicesData: OurServicesI[] = [
    {
      id: 1,
      title: "Accounting & CFO Services",
      subServices: [
        { id: 1, title: "BOOKKEEPING" },
        { id: 2, title: "BOOKKEEPING" },
        { id: 3, title: "BOOKKEEPING" },
        { id: 4, title: "BOOKKEEPING" },
        { id: 5, title: "BOOKKEEPING" },
      ],
      bg: "#FF7701",
    },
    {
      id: 2,
      title: "Internal Auditing Services",
      subServices: [],
      bg: "#C94A8C",
    },
    {
      id: 3,
      title: "Software Services",
      subServices: [],
      bg: "#825698",
    },
    {
      id: 4,
      title: "TAX Services",
      subServices: [],
      bg: "#80CE42",
    },
  ];
  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 relative">
        {ourServicesData?.map((el: OurServicesI) => {
          return <OurServicesCard key={el?.id} data={el} />;
        })}
        <div className="xl:w-[330px] xl:h-[330px] lg:w-[330px] lg:h-[330px] md:w-[220px] md:h-[220px] sm:w-[220px] sm:h-[220px] xs:w-[150px] xs:h-[150px] bg-[#F2FAEC] rounded-full p-[15px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <Image
            src="/logos/auditlogoblack.svg"
            alt="/logos/auditlogoblack.svg"
            width={100}
            height={100}
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </CustomSection>
  );
};

export default OurServicesSection;
