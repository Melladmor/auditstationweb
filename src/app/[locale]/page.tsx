import { getTranslations } from "next-intl/server";

import HeroSection from "@/components/HeroSection/HeroSection";
import OurHappyCustomers from "@/components/sections/OurHappyCustomer/OurHappyCustomers";
import AboutUsSection from "@/components/sections/AboutUs/AboutUsSection";
import OurServicesSection from "@/components/sections/OurServices/OurServicesSection";
import PackagesSection from "@/components/sections/Packages/PackagesSection";

export default async function HomePage() {
  const t = await getTranslations();
  return (
    <div>
      <HeroSection />
      <OurHappyCustomers />
      <AboutUsSection />
      <OurServicesSection />
      <PackagesSection />
    </div>
  );
}
