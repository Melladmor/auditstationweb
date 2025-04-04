import CustomSection from "@/components/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import { OurHappyCustomersI } from "./type";

import { OurHappyCustomersContainer } from "./OurHappyCustomersContainer";

const OurHappyCustomers = async () => {
  const t = await getTranslations("sections.ourhappycustomers");

  const ourHappyCustomersData: OurHappyCustomersI[] = [
    {
      id: 1,
      title: "Company Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu fringilla felis.",
      logo: "/images/company.png",
      category: [
        {
          id: 1,
          name: "Main Category",
        },
        {
          id: 2,
          name: "Subcategory",
        },
      ],
      cta: "www.google.com",
    },
    {
      id: 2,
      title: "Company Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu fringilla felis.",
      logo: "/images/company.png",
      category: [
        {
          id: 1,
          name: "Main Category",
        },
        {
          id: 2,
          name: "Subcategory",
        },
      ],
      cta: "www.google.com",
    },
    {
      id: 3,
      title: "Company Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu fringilla felis.",
      logo: "/images/company.png",
      category: [
        {
          id: 1,
          name: "Main Category",
        },
        {
          id: 2,
          name: "Subcategory",
        },
      ],
      cta: "www.google.com",
    },
    {
      id: 4,
      title: "Company Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu fringilla felis.",
      logo: "/images/company.png",
      category: [
        {
          id: 1,
          name: "Main Category",
        },
        {
          id: 2,
          name: "Subcategory",
        },
      ],
      cta: "www.google.com",
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
      <OurHappyCustomersContainer data={ourHappyCustomersData} />
    </CustomSection>
  );
};

export default OurHappyCustomers;
