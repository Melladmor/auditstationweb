import React from "react";
import { NavLinkI } from "../type";
import MobileNavlink from "./MobileNavlink";
import { Box, Icon } from "@chakra-ui/react";
import HomeIcon from "../../../../public/icons/HomeIcon";
import { usePathname } from "@/i18n/routing";
import Link from "next/link";
import { useLocale } from "next-intl";

type Props = {
  linksData: NavLinkI[];
};

const MobileNavlinks = ({ linksData }: Props) => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <Box>
      <button
        className={`w-full h-[40px] flex justify-start  items-center p-2 ${
          locale === "en" ? "text-start" : "text-end"
        } text-[20px] font-medium capitalize shadow-sm rounded-md transition-all duration-500 ease-in-out 
          hover:shadow-md`}>
        <Link href="/">
          <Icon w="32px" h="32px">
            <HomeIcon
              fillOne={pathname === "/" ? "#FF7701" : "white"}
              fillTwo={pathname === "/" ? "white" : "#FF7701"}
            />
          </Icon>
        </Link>
      </button>
      <div className="w-full h-[2px] bg-secondary my-1"></div>

      {linksData.map((link: NavLinkI) => {
        return <MobileNavlink key={link.id} {...link} />;
      })}
    </Box>
  );
};

export default MobileNavlinks;
