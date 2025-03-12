import { getTranslations } from "next-intl/server";
import { Box } from "@chakra-ui/react";

import HeroSection from "@/components/HeroSection/HeroSection";
import CustomSection from "@/components/CustomSection/CustomSection";
import OurHappyCustomers from "@/components/sections/OurHappyCustomer/OurHappyCustomers";

export default async function HomePage() {
  const t = await getTranslations();
  return (
    <Box>
      <HeroSection />
      <OurHappyCustomers />
    </Box>
  );
}
