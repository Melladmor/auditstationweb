import HeroSection from "@/components/HeroSection/HeroSection";
import OurHappyCustomers from "@/components/sections/OurHappyCustomer/OurHappyCustomers";
import AboutUsSection from "@/components/sections/AboutUs/AboutUsSection";
import OurServicesSection from "@/components/sections/OurServices/OurServicesSection";
import PackagesSection from "@/components/sections/Packages/PackagesSection";
import OurPlatform from "@/components/sections/OurPlatform/OurPlatform";
import TrainingPrograms from "@/components/sections/TrainingPrograms/TrainingPrograms";
import TaxStation from "@/components/sections/TaxStation/TaxStation";
import RewardsProgram from "@/components/sections/RewardsProgram/RewardsProgram";
import OurTeam from "@/components/sections/OurTeam/OurTeam";
import News from "@/components/sections/News/News";
import GoogleReviews from "@/components/sections/GoogleReviews/GoogleReviews";
import Input from "@/components/Inputs/Text";
import Password from "@/components/Inputs/Password";
import Phone from "@/components/Inputs/Phone";

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
      <OurTeam />
      <News />
      <GoogleReviews />
    </div>
  );
}
