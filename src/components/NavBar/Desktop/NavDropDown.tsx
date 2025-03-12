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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full mb-2">
      <div className="collapse">
        <input
          type="checkbox"
          className="peer"
          checked={isOpen}
          onChange={(e) => setIsOpen(e.target.checked)}
        />
        <div className="collapse-title flex justify-between items-center text-white p-2 cursor-pointer text-xl font-medium capitalize shadow-sm rounded-md transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
          <span>{title}</span>
          {locale === "ar" ? (
            <span>
              {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            </span>
          ) : (
            <span>
              {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            </span>
          )}
        </div>
        <div className="collapse-content">
          <div className="mt-1">
            {items.map((item, index) => (
              <button
                key={index}
                className={`w-full text-white rounded-md p-2 text-xl font-medium capitalize shadow-sm transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white`}>
                <Link href={item.isPage ? item.url : `#${item.url}`}>
                  {item.title}
                </Link>
              </button>
            ))}
          </div>
        </div>
      </div>
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
