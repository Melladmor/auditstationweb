import React from "react";
import { NavLinkI } from "../type";
import NavLinks from "./NavLinks";

type Props = {
  linksData: NavLinkI[];
};
const DesktopNavBar = ({ linksData }: Props) => {
  return <NavLinks data={linksData} />;
};

export default DesktopNavBar;
