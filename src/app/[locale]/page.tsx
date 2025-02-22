import { getTranslations } from "next-intl/server";
import { Box } from "@chakra-ui/react";
import LanguageSelect from "@/components/NavBar/LangaugeSelect";
import { ThemeSwitcher } from "@/components/NavBar/ThemeSwitcher";

export default async function HomePage() {
  const t = await getTranslations();
  return (
    <Box>
      <h1>{t("title")}</h1>
      <LanguageSelect />
      <ThemeSwitcher />
    </Box>
  );
}
