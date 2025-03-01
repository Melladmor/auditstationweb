"use client";
import { useState, useRef, useEffect } from "react";
import { Box, Text, Button, VStack, Collapsible, Icon } from "@chakra-ui/react";
import { DropDownLinkT } from "../type";
import Link from "next/link";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@chakra-ui/icons/ChevronDown";
import { ChevronUpIcon } from "@chakra-ui/icons/ChevronUp";
import { useLocale } from "next-intl";

export type NavDropDown = {
  title: string;
  items: DropDownLinkT[];
  isMobile?: boolean;
};

const NavBarMboile: React.FC<NavDropDown> = ({ title, items }) => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box w="full" mb="2">
      <Collapsible.Root onOpenChange={(e) => setIsOpen(e.open)} color="white">
        <Collapsible.Trigger asChild>
          <button
            className={`w-full flex text-white justify-between items-center h-[40px] p-2 text-start text-[20px] font-medium capitalize shadow-sm rounded-md transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white  hover:shadow-md`}>
            {locale === "ar" && (
              <Box>
                {isOpen ? (
                  <Icon w="5" h="5" as={ChevronUpIcon} />
                ) : (
                  <Icon w="5" h="5" as={ChevronDownIcon} />
                )}
              </Box>
            )}
            <Box>{title}</Box>
            {locale === "en" && (
              <Box>
                {isOpen ? (
                  <Icon w="5" h="5" as={ChevronUpIcon} />
                ) : (
                  <Icon w="5" h="5" as={ChevronDownIcon} />
                )}
              </Box>
            )}
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content>
          <VStack
            align="start"
            mt={1}
            pl={`${locale === "en" && 4}`}
            pr={`${locale === "ar" && 4}`}
            borderLeft={`${locale === "en" && "2px solid #FF7701"}`}
            borderRight={`${locale === "ar" && "2px solid #FF7701"}`}>
            {items.map((item, index) => (
              <button
                key={index}
                className={`w-full ${
                  locale === "en" ? "text-start" : "text-end"
                }  h-[40px] text-white rounded-md p-2 text-start text-[20px] font-medium capitalize shadow-sm transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white  hover:shadow-md`}>
                <Link href={item.isPage ? item.url : `#${item.url}`}>
                  {item.title}
                </Link>
              </button>
            ))}
          </VStack>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
};

const NavDropDown = ({ items, title, isMobile }: NavDropDown) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = (): void => setIsOpen(!isOpen);

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
    <Box>
      {isMobile ? (
        <NavBarMboile title={title} items={items} />
      ) : (
        <Box
          position="relative"
          color="white"
          ref={menuRef}
          className={`links ${pathname === "/" ? "links_active" : ""}`}>
          <Box
            display="flex"
            alignItems="center"
            gap="10px"
            cursor="pointer"
            font="500"
            className="xl:text-[20px] lg:text-[16px]"
            onClick={toggleMenu}>
            <Text>{title}</Text>
            {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </Box>
          {isOpen && (
            <Box
              position="absolute"
              bg="white"
              color="black"
              boxShadow="md"
              mt={2}
              borderRadius="md"
              p={2}>
              {items?.map((item: DropDownLinkT) => {
                return (
                  <Link
                    className="font-[500] xl:text-[20px] lg:text-[16px]"
                    href={item.isPage ? item.url : `#${item.url}`}
                    key={item?.id}>
                    <Box
                      as="button"
                      textWrap="nowrap"
                      textAlign="start"
                      w="full"
                      p={1}
                      _hover={{ bg: "gray.100" }}>
                      {item.title}
                    </Box>
                  </Link>
                );
              })}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default NavDropDown;
