import { Box } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";
import { NavLinkI } from "./type";
import LanguageSelect from "./LangaugeSelect";
import { ThemeSwitcher } from "./ThemeSwitcher";

import NavBar from "./NavBar";
import Profile from "./Profile";

const Header = async () => {
  const t = await getTranslations("navbarlinks");

  const linksData: NavLinkI[] = [
    {
      id: 1,
      title: t("aboutus"),
      url: "aboutus",
      isPage: true,
    },
    {
      id: 2,
      title: t("services.services"),
      url: "services",
      isPage: false,
      isDropDwon: [
        {
          id: 1,
          title: t("services.mainservices"),
          url: "services",
          isPage: false,
        },
        {
          id: 2,
          title: t("services.packages"),
          url: "packages",
          isPage: false,
        },
      ],
    },
    {
      id: 3,
      title: t("platform"),
      url: "platform",
      isPage: true,
    },
    {
      id: 4,
      title: t("training"),
      url: "training",
      isPage: true,
    },
    {
      id: 5,
      title: t("news"),
      url: "news",
      isPage: true,
    },
    {
      id: 6,
      title: t("contactus"),
      url: "contactus",
      isPage: false,
    },
  ];
  return (
    <header className="px_padding py-[24px] bg-mainblack h-[120px] sticky top-0 z-10">
      <Box
        h="72px"
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <NavBar linksData={linksData} />
        <Box display="flex" alignItems="center" gap="8px">
          <ThemeSwitcher />
          <LanguageSelect />
          <Profile />
        </Box>
      </Box>
    </header>
  );
};

export default Header;
