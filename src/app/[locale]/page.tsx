import { getTranslations } from "next-intl/server";

import HeroSection from "@/components/HeroSection/HeroSection";
import OurHappyCustomers from "@/components/sections/OurHappyCustomer/OurHappyCustomers";

export default async function HomePage() {
  const t = await getTranslations();
  return (
    <div>
      <HeroSection />
      <OurHappyCustomers />
    </div>
  );
}
