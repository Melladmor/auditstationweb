import { getTranslations } from "next-intl/server";
import { Box } from "@chakra-ui/react";

import HeroSection from "@/components/HeroSection/HeroSection";

export default async function HomePage() {
  const t = await getTranslations();
  return (
    <Box>
      <HeroSection />
    </Box>
  );
}
