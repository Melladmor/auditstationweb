"use client";
import React from "react";
import { NavLinkI } from "../type";
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
    <div className="h-full flex items-center xl:gap-[100px] lg:gap-[20px]">
      <Logo />
      <div className="flex items-center h-full xl:gap-[32px] lg:gap-[15px]">
        <Link
          className={`flex justify-center items-center min-w-[50px] links ${
            pathname === "/" ? "links_active" : ""
          }`}
          href="/">
          <div className="xl:w-[32px] xl:h-[32px] lg:w-[25px] lg:h-[25px]">
            <HomeIcon
              fillOne={pathname === "/" ? "#FF7701" : "white"}
              fillTwo={pathname === "/" ? "white" : "#FF7701"}
            />
          </div>
        </Link>

        {data.map((link: NavLinkI) => (
          <NavLink key={link.id} {...link} />
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
