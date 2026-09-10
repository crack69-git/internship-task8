import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { PiShieldCheckFill } from "react-icons/pi";

const MarqueeSection = () => {
  const companies = (
    <>
      <div className="ml-5">
        <Image
          src="/aws2.jpg"
          alt="AWS"
          width={250}
          height={80}
          className="rounded-lg max-sm:max-w-25"
        ></Image>
      </div>
      <div className="ml-5">
        <Image
          src="/daraz.webp"
          alt="Daraz"
          width={250}
          height={80}
          className="rounded-lg max-sm:max-w-25"
        ></Image>
      </div>
      <div className="ml-5">
        <Image
          src="/rokomari.webp"
          alt="Rokomari"
          width={250}
          height={80}
          className="rounded-lg max-sm:max-w-25"
        ></Image>
      </div>
      <div className="ml-5">
        <Image
          src="/chaldal.jpg"
          alt="Chaldal"
          width={250}
          height={80}
          className="rounded-lg max-sm:max-w-25"
        ></Image>
      </div>
      <div className="ml-5">
        <Image
          src="/brac.webp"
          alt="brac"
          width={250}
          height={80}
          className="rounded-lg max-sm:max-w-25"
        ></Image>
      </div>
      <div className="ml-5">
        <Image
          src="/cm.png"
          alt="cm"
          width={250}
          height={80}
          className="rounded-lg max-sm:max-w-25"
        ></Image>
      </div>
    </>
  );
  return (
    <div className="flex items-center justify-center flex-col max-sm:w-11/12 w-3/5 mx-auto my-10 gap-2 ">
      <p className="text-lg  font-bold flex items-center max-sm:text-[16px] gap-2">
        <PiShieldCheckFill size={30} color="green" />
        Trusted by forward-thinking engineering teams at
      </p>
      <Marquee
        className=" text-lg font-bold text-gray-600 border border-dashed border-gray-300 py-4 mask-l-from-90% mask-r-from-90%"
        direction="left"
      >
        {companies}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
