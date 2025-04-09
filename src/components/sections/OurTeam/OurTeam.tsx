import CustomSection from "@/components/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import { RewardCardsI } from "../RewardsProgram/RewardCards/type";
import OurTeamContainer from "./OurTeamContainer";

const OurTeam = async () => {
  const t = await getTranslations("sections.ourteam");
  const ourTeamData: RewardCardsI[] = [
    {
      id: 1,
      image: "/images/team.jpg",
      title: "Ahmed  Aly",
      subTitle: "Product Designer",
      discription:
        "Lorem ipsum dolor sit amet consectetur. Sagittis orci eu pretium viverra ipsum sit.",
      links: [
        { id: 1, name: "facebook", url: "https://facebook.com/yourPage" },
        { id: 2, name: "x", url: "https://x.com/yourHandle" },
        { id: 3, name: "instagram", url: "https://instagram.com/yourProfile" },
        { id: 4, name: "linkedin", url: "https://linkedin.com/in/yourProfile" },
        { id: 5, name: "telegram", url: "https://t.me/yourUsername" },
        { id: 6, name: "whatsapp", url: "https://wa.me/1234567890" },
        { id: 7, name: "youtube", url: "https://youtube.com/@yourChannel" },
        {
          id: 8,
          name: "snapchat",
          url: "https://snapchat.com/add/yourUsername",
        },
        { id: 9, name: "tiktok", url: "https://tiktok.com/@yourUsername" },
      ],
    },
    {
      id: 2,
      image: "/images/team.jpg",
      title: "Ahmed  Aly",
      subTitle: "Product Designer",
      discription:
        "Lorem ipsum dolor sit amet consectetur. Sagittis orci eu pretium viverra ipsum sit.",
      links: [
        { id: 1, name: "facebook", url: "https://facebook.com/yourPage" },
        { id: 2, name: "x", url: "https://x.com/yourHandle" },
        { id: 3, name: "instagram", url: "https://instagram.com/yourProfile" },
        { id: 4, name: "linkedin", url: "https://linkedin.com/in/yourProfile" },
        { id: 5, name: "telegram", url: "https://t.me/yourUsername" },
        { id: 6, name: "whatsapp", url: "https://wa.me/1234567890" },
        { id: 7, name: "youtube", url: "https://youtube.com/@yourChannel" },
        {
          id: 8,
          name: "snapchat",
          url: "https://snapchat.com/add/yourUsername",
        },
        { id: 9, name: "tiktok", url: "https://tiktok.com/@yourUsername" },
      ],
    },
    {
      id: 3,
      image: "/images/team.jpg",
      title: "Ahmed  Aly",
      subTitle: "Product Designer",
      discription:
        "Lorem ipsum dolor sit amet consectetur. Sagittis orci eu pretium viverra ipsum sit.",
      links: [
        { id: 1, name: "facebook", url: "https://facebook.com/yourPage" },
        { id: 2, name: "x", url: "https://x.com/yourHandle" },
        { id: 3, name: "instagram", url: "https://instagram.com/yourProfile" },
        { id: 4, name: "linkedin", url: "https://linkedin.com/in/yourProfile" },
        { id: 5, name: "telegram", url: "https://t.me/yourUsername" },
        { id: 6, name: "whatsapp", url: "https://wa.me/1234567890" },
        { id: 7, name: "youtube", url: "https://youtube.com/@yourChannel" },
        {
          id: 8,
          name: "snapchat",
          url: "https://snapchat.com/add/yourUsername",
        },
        { id: 9, name: "tiktok", url: "https://tiktok.com/@yourUsername" },
      ],
    },
    {
      id: 4,
      image: "/images/team.jpg",
      title: "Ahmed  Aly",
      subTitle: "Product Designer",
      discription:
        "Lorem ipsum dolor sit amet consectetur. Sagittis orci eu pretium viverra ipsum sit.",
      links: [
        { id: 1, name: "facebook", url: "https://facebook.com/yourPage" },
        { id: 2, name: "x", url: "https://x.com/yourHandle" },
        { id: 3, name: "instagram", url: "https://instagram.com/yourProfile" },
        { id: 4, name: "linkedin", url: "https://linkedin.com/in/yourProfile" },
        { id: 5, name: "telegram", url: "https://t.me/yourUsername" },
        { id: 6, name: "whatsapp", url: "https://wa.me/1234567890" },
        { id: 7, name: "youtube", url: "https://youtube.com/@yourChannel" },
        {
          id: 8,
          name: "snapchat",
          url: "https://snapchat.com/add/yourUsername",
        },
        { id: 9, name: "tiktok", url: "https://tiktok.com/@yourUsername" },
      ],
    },
  ];
  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]"
      id="ourteam">
      <OurTeamContainer data={ourTeamData} />
    </CustomSection>
  );
};

export default OurTeam;
