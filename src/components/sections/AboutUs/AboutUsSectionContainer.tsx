"use client";
import Title from "@/components/Title/Title";
import React from "react";
import { AboutUsSectionI } from "./type";
import Button from "@/components/Buttons/Button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import AboutUsSectionVideo from "./AboutUsSectionVideo";

type Props = AboutUsSectionI & {
  first: string;
  second: string;
};

const AboutUsSectionContainer = ({
  description,
  first,
  second,
  title,
  video,
}: Props) => {
  const t = useTranslations();
  const navigate = useRouter();
  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col items-start gap-[24px] h-[500px] w-full ">
      <div className=" flex flex-col items-start  xl:gap-[32px] lg:gap-[28px] md:gap-[24px] sm:gap-[20px] xs:gap-[16px]">
        <Title first={first} second={second} className="mb-0" />
        <p className="xl:text-[24px] lg:text-[20px] text-light-text dark:text-dark-text">
          {description}
        </p>
        <Button
          title={t("readmore")}
          onClick={() => navigate.push("aboutus")}
        />
      </div>
      <AboutUsSectionVideo url="" />
    </div>
  );
};

export default AboutUsSectionContainer;
