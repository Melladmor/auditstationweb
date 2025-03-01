import React from "react";
import { NavLinkI } from "../type";
import { Box } from "@chakra-ui/react";
import NavDropDown from "./NavDropDown";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

type Props = NavLinkI;

const NavLink = ({ id, isPage, title, url, isDropDwon }: Props) => {
  const locale = useLocale();
  const pathname = usePathname();
  const splitedPathName = pathname.slice(`/${locale}`.length);
  return (
    <Box>
      {isDropDwon ? (
        <NavDropDown title={title} items={isDropDwon} />
      ) : (
        <Link
          className={`xl:text-[20px] lg:text-[16px] flex justify-center min-w-[50px] font-[500] links  ${
            splitedPathName === `/${url}` || url === `#${url}`
              ? "links_active text-secondary"
              : "text-white"
          }  `}
          href={isPage ? url : `#${url}`}>
          {title}
        </Link>
      )}
    </Box>
  );
};

export default NavLink;
