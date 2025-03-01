"use client";
import React from "react";
import { NavLinkI } from "../type";
import { Box, Icon } from "@chakra-ui/react";
import NavLink from "./NavLink";
import HomeIcon from "../../../../public/icons/HomeIcon";
import { Link, usePathname } from "@/i18n/routing";
import Logo from "../Logo";

type Props = {
  data: NavLinkI[];
};

const NavLinks = ({ data }: Props) => {
  const pathname = usePathname();
  return (
    <Box
      h="full"
      display="flex"
      alignItems="center"
      className="xl:gap-[100px] lg:gap-[20px]">
      <Logo />
      <Box
        display="flex"
        alignItems="center"
        h="full"
        className="xl:gap-[32px] lg:gap-[15px]">
        <Link
          className={`flex justify-center items-center min-w-[50px]  links ${
            pathname === "/" ? "links_active" : ""
          }`}
          href="/">
          <Icon className="xl:size-[32px] lg:size-[25px]">
            <HomeIcon
              fillOne={pathname === "/" ? "#FF7701" : "white"}
              fillTwo={pathname === "/" ? "white" : "#FF7701"}
            />
          </Icon>
        </Link>
        {data.map((link: NavLinkI) => {
          return <NavLink key={link.id} {...link} />;
        })}
      </Box>
    </Box>
  );
};

export default NavLinks;
