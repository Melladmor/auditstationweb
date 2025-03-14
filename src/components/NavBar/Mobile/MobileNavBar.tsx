"use client";

import { useState } from "react";
import Logo from "../Logo";
import { NavLinkI } from "../type";
import MobileNavlinks from "./MobileNavlinks";

type Props = {
  linksData: NavLinkI[];
};

const MobileNavBar = ({ linksData }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="md:size-[30px] sm:size-[25px] text-white xs:size-[25px] bg-white rounded-sm flex justify-center items-center"
        onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-[15px] text-[#FF7701]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
          <div className="absolute left-0 top-0 w-64 bg-black text-white shadow-md h-full rounded-md p-4">
            <div className="flex justify-between items-center mb-3">
              <Logo />
              <button className="text-white" onClick={() => setOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <MobileNavlinks linksData={linksData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
