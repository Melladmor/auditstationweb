import HeroSection from "@/components/HeroSection/HeroSection";
import OurHappyCustomers from "@/components/sections/OurHappyCustomer/OurHappyCustomers";
import AboutUsSection from "@/components/sections/AboutUs/AboutUsSection";
import OurServicesSection from "@/components/sections/OurServices/OurServicesSection";
import PackagesSection from "@/components/sections/Packages/PackagesSection";
import OurPlatform from "@/components/sections/OurPlatform/OurPlatform";
import TrainingPrograms from "@/components/sections/TrainingPrograms/TrainingPrograms";
import TaxStation from "@/components/sections/TaxStation/TaxStation";
import RewardsProgram from "@/components/sections/RewardsProgram/RewardsProgram";

export default async function HomePage() {
  return (
    <div>
      <HeroSection />
      <OurHappyCustomers />
      <AboutUsSection />
      <OurServicesSection />
      <PackagesSection />
      <OurPlatform />
      <TrainingPrograms />
      <TaxStation />
      <RewardsProgram />
    </div>
  );
}
