import CustomSection from "@/components/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import { OurHappyCustomersI } from "./type";
import OurHappyCustomresCard from "./OurHappyCustomresCard";

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
      cta: () => console.log("test"),
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
      cta: () => console.log("test"),
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
      cta: () => console.log("test"),
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
      cta: () => console.log("test"),
    },
  ];
  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}>
      {ourHappyCustomersData?.map((el: OurHappyCustomersI) => {
        return <OurHappyCustomresCard key={el?.id} {...el} />;
      })}
    </CustomSection>
  );
};

export default OurHappyCustomers;
