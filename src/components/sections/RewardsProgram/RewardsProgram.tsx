import CustomSection from "@/components/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import RewardsProgramHead from "./RewardsProgramHead";
import { RewardsProgramI } from "./type";
import { RewardCardsI } from "./RewardCards/type";
import RewardCard from "./RewardCards/RewardCard";

const RewardsProgram = async () => {
  const t = await getTranslations("sections.rewardsprogram");
  const title = await getTranslations();

  const rewardProgramData: RewardsProgramI = {
    title: "‘’Unlock Exclusive Rewards & Benefits!’’",
    discription:
      "Earn points, unlock exclusive benefits, and elevate your membership with our rewarding loyalty program. The more you engage, the more you gain!",
    points: {
      title: "‘’ Steps to Advance in the Rewards Program ‘’",
      subTitle: "Move Up, Earn More, Unlock Exclusive Benefits",
      pointsValues: [
        {
          id: 1,
          max: 200000,
          value: 0,
          subTitle: title("points"),
          title: "Bronze",
        },
        {
          id: 2,
          max: 200000,
          value: 30000,
          subTitle: title("points"),
          title: "Silver",
        },
        {
          id: 3,
          max: 200000,
          value: 90000,
          subTitle: title("points"),
          title: "Gold",
        },
        {
          id: 4,
          max: 200000,
          value: 200000,
          subTitle: title("points"),
          title: "Black",
        },
      ],
    },
    cards: [
      {
        id: 1,
        image: "/images/reward.png",
        title: "Bronze Reward",
        subTitle:
          "Our  Bronze rewards program is designed to recognize and reward your engagement....",
      },
      {
        id: 2,
        image: "/images/reward.png",
        title: "Bronze Reward",
        subTitle:
          "Our  Bronze rewards program is designed to recognize and reward your engagement....",
      },
      {
        id: 3,
        image: "/images/reward.png",
        title: "Bronze Reward",
        subTitle:
          "Our  Bronze rewards program is designed to recognize and reward your engagement....",
      },
      {
        id: 4,
        image: "/images/reward.png",
        title: "Bronze Reward",
        subTitle:
          "Our  Bronze rewards program is designed to recognize and reward your engagement....",
      },
    ],
  };
  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]">
      <RewardsProgramHead data={rewardProgramData} />
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 mt-16">
        {rewardProgramData?.cards?.map((el: RewardCardsI) => {
          return <RewardCard key={el?.id} {...el} />;
        })}
      </div>
    </CustomSection>
  );
};

export default RewardsProgram;
