import React from "react";
import { usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Link from "next/link";
import NavDropDown from "../Desktop/NavDropDown";
import { NavLinkI } from "../type";

type Props = NavLinkI;

const MobileNavlink = ({ id, isPage, title, url, isDropDwon }: Props) => {
  const locale = useLocale();
  const pathname = usePathname();
  const splitedPathName = pathname.slice(`/${locale}`.length);
  const isActive = splitedPathName === `/${url}` || url === `#${url}`;
  return (
    <div className="w-full">
      {isDropDwon ? (
        <NavDropDown title={title} items={isDropDwon} isMobile />
      ) : (
        <button
          className={`w-full h-[40px] p-2 ${
            locale === "en" ? "text-start" : "text-end"
          }  text-white text-[20px] font-medium capitalize shadow-sm rounded-md transition-all duration-500 ease-in-out 
            ${isActive ? "bg-secondary" : ""}
            hover:bg-secondary hover:text-white  hover:shadow-md`}>
          <Link href={isPage ? url : `#${url}`}>{title}</Link>
        </button>
      )}
      <div className="w-full h-[2px] bg-secondary my-1"></div>
    </div>
  );
};

export default MobileNavlink;
