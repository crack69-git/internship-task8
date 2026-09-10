import Compatabilities from "@/Components/Compatabilities";
import HomepageSection from "@/Components/Homepage";
import MarqueeSection from "@/Components/MarqueeSection";
import PricingSection from "@/Components/PricingSection";
import WhySection from "@/Components/WhySection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomepageSection />
      <MarqueeSection />
      <Compatabilities />
      <WhySection />
      <PricingSection />
    </div>
  );
}
