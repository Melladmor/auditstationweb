"use client";
import React from "react";
import { NavLinkI } from "./type";
import { Box } from "@chakra-ui/react";
import MobileNavBar from "./Mobile/MobileNavBar";
import DesktopNavBar from "./Desktop/DesktopNavBar";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  linksData: NavLinkI[];
};

const NavBar = ({ linksData }: Props) => {
  const isSmall = useMediaQuery("(max-width: 768px)");
  return (
    <Box>
      {isSmall ? (
        <MobileNavBar linksData={linksData} />
      ) : (
        <DesktopNavBar linksData={linksData} />
      )}
    </Box>
  );
};

export default NavBar;
