"use client";

import { Icon } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons/Hamburger";
import Logo from "../Logo";
import { NavLinkI } from "../type";
import MobileNavlinks from "./MobileNavlinks";

type Props = {
  linksData: NavLinkI[];
};
const MobileNavBar = ({ linksData }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerRoot
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      placement="start">
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <button className="md:size-[30px] sm:size-[25px] text-white  xs:size-[25px] bg-white rounded-sm flex justify-center items-center">
          <Icon
            as={HamburgerIcon}
            color="#FF7701"
            className="size-[15px]"
            fontWeight="500"
          />
        </button>
      </DrawerTrigger>
      <DrawerContent offset="4" rounded="md" boxShadow="sm" bg="black">
        <DrawerHeader>
          <DrawerTitle>
            <Logo />
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <MobileNavlinks linksData={linksData} />
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
export default MobileNavBar;
