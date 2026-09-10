import Compatabilities from "@/Components/Compatabilities";
import HomepageSection from "@/Components/Homepage";
import MarqueeSection from "@/Components/MarqueeSection";
import PricingSection from "@/Components/PricingSection";
import QuestionSection from "@/Components/QuestionSection";
import ReviewSection from "@/Components/ReviewSection";
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
      <ReviewSection />
      <QuestionSection />
    </div>
  );
}
