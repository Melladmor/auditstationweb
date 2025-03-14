"use client";
import { useState, useRef, useEffect } from "react";
import { DropDownLinkT } from "../type";
import Link from "next/link";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export type NavDropDown = {
  title: string;
  items: DropDownLinkT[];
  isMobile?: boolean;
};

const NavBarMobile: React.FC<NavDropDown> = ({ title, items }) => {
  const locale = useLocale();
  return (
    <div className="w-full">
      <details className="collapse collapse-arrow text-xl font-medium capitalize">
        <summary className="collapse-title flex items-center">{title}</summary>
        <div className="collapse-content">
          <div className="mt-1">
            {items.map((item, index) => (
              <button
                key={index}
                className={`w-full text-start ${
                  locale === "ar"
                    ? "border-r border-secondary"
                    : "border-l-[2px] border-secondary"
                } text-white mb-1 p-2 text-xl font-medium capitalize shadow-sm transition-all duration-500 ease-in-out`}>
                <Link href={item.isPage ? item.url : `#${item.url}`}>
                  {item.title}
                </Link>
              </button>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
};

const NavDropDown = ({ items, title, isMobile }: NavDropDown) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent): void => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <NavBarMobile title={title} items={items} />
      ) : (
        <ul className="menu menu-horizontal p-0">
          <li>
            <details className="text-white xl:text-[20px] lg:text-[16px]  font-[500] links">
              <summary>
                <span className="ml-2">{title}</span>
              </summary>
              <ul className="p-2 text-black">
                {items?.map((item: DropDownLinkT) => (
                  <li key={item.id}>
                    <Link
                      className="xl:text-[20px] lg:text-[16px]  font-[500] text-nowrap"
                      href={item.isPage ? item.url : `#${item.url}`}
                      key={item?.id}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavDropDown;
