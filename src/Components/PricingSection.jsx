import React from "react";
import PriceToogelSection from "./PriceToogelSection";

const PricingSection = () => {
  return (
    <div className="w-11/12 mx-auto my-20 flex flex-col items-center justify-center">
      <div className="badge badge-soft badge-info">
        Simple & Transparent Plans
      </div>
      <h4 className="max-sm:text-xl text-3xl text-center font-bold mt-4">
        Flexible Pricing Built for Teams at<br></br> Every Scale
      </h4>
      <p className="max-sm:text-sm max-sm:text-center text-lg font-semibold text-gray-600">
        No hidden fees. Upgrade, downgrade, or cancel anytime.
      </p>
      <div>
        <PriceToogelSection />
      </div>
    </div>
  );
};

export default PricingSection;
