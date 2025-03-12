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
    <header className="px_padding xl:h-[120px] lg:h-[120px] md:h-[100px]  xl:py-[24px] lg:py-[24px] md:py-[18px] bg-mainblack  sticky top-0 z-50">
      <div className="h-[72px] flex justify-between items-center">
        <NavBar linksData={linksData} />
        <div className="flex items-center gap-[8px]">
          <ThemeSwitcher />
          <LanguageSelect />
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;
