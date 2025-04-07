import CustomSection from "@/components/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import { GoogleReviewI } from "./type";
import GoogleReviewsContainer from "./GoogleReviewsContainer";

const GoogleReviews = async () => {
  const t = await getTranslations("sections.googlereviews");
  const reviewData: GoogleReviewI[] = [
    {
      id: 1,
      image: "/images/review.png",
    },
    {
      id: 2,
      image: "/images/review.png",
    },
    {
      id: 3,
      image: "/images/review.png",
    },
    {
      id: 4,
      image: "/images/review.png",
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
      <GoogleReviewsContainer data={reviewData} />
    </CustomSection>
  );
};

export default GoogleReviews;
