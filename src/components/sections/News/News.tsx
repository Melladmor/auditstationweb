import CustomSection from "@/components/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import { NewsI } from "./type";
import { NewsContainer } from "./NewsContainer";

type Props = {};

const News = async (props: Props) => {
  const t = await getTranslations("sections.news");
  const newsData: NewsI[] = [
    {
      id: 1,
      image: "/images/news.jpg",
      title: "Audit Station Launches New AI-Powered Auditing Tool",
      category: "Technology",
      subCategory: "AI & Automation",
      publishDate: "2025-04-01",
      discription:
        "Audit Station has introduced a groundbreaking AI tool designed to enhance audit accuracy and reduce manual errors, transforming how businesses handle compliance.",
      readingTime: "3",
      author: {
        name: "Dr. Sobhi Wazzan",
        image: "/images/news.jpg",
      },
    },
    {
      id: 2,
      image: "/images/news.jpg",
      title: "Top 5 Tax Strategies to Prepare for Fiscal Year 2025",
      category: "Finance",
      subCategory: "Tax Planning",
      publishDate: "2025-03-25",
      discription:
        "Explore the most effective tax strategies recommended by Audit Station experts to maximize savings and ensure regulatory compliance for the upcoming fiscal year.",
      readingTime: "4",
      author: {
        name: "Lana Saad",
        image: "/images/news.jpg",
      },
    },
    {
      id: 3,
      image: "/images/news.jpg",
      title: "How Remote Auditing is Reshaping the Industry",
      category: "Trends",
      subCategory: "Remote Work",
      publishDate: "2025-03-18",
      discription:
        "With hybrid work on the rise, remote auditing is becoming the norm. Learn how companies are adapting and what tools are helping auditors stay efficient.",
      readingTime: "5",
      author: {
        name: "Khaled Youssef",
        image: "/images/news.jpg",
      },
    },
    {
      id: 4,
      image: "/images/news.jpg",
      title: "Audit Station Expands Services Across MENA Region",
      category: "Business",
      subCategory: "Growth & Expansion",
      publishDate: "2025-03-10",
      discription:
        "In a strategic move, Audit Station has extended its services across multiple countries in the MENA region, empowering more companies with professional auditing support.",
      readingTime: "2",
      author: {
        name: "Sara Al-Fahad",
        image: "/images/news.jpg",
      },
    },
    {
      id: 5,
      image: "/images/news.jpg",
      title: "Understanding the 2025 IFRS Updates: What You Need to Know",
      category: "Regulations",
      subCategory: "IFRS",
      publishDate: "2025-02-28",
      discription:
        "The latest IFRS updates for 2025 bring significant changes. Here’s a breakdown of the key updates and how they affect your company’s financial reporting.",
      readingTime: "6",
      author: {
        name: "Nour Hasan",
        image: "/images/news.jpg",
      },
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
      <NewsContainer data={newsData} />
    </CustomSection>
  );
};

export default News;
