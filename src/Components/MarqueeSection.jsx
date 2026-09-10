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
          width={100}
          height={50}
          className="rounded-lg"
        ></Image>
      </div>
      <div className="ml-5">
        <Image
          src="/aws2.jpg"
          alt="AWS"
          width={100}
          height={50}
          className="rounded-lg"
        ></Image>
      </div>
      <div className="ml-5">
        <Image
          src="/aws2.jpg"
          alt="AWS"
          width={100}
          height={50}
          className="rounded-lg"
        ></Image>
      </div>
      <div className="ml-5">
        <Image
          src="/aws2.jpg"
          alt="AWS"
          width={100}
          height={50}
          className="rounded-lg"
        ></Image>
      </div>
    </>
  );
  return (
    <div className="flex items-center justify-center flex-col w-3/5 mx-auto my-10 gap-2 mask-l-from-90% mask-r-from-90%">
      <p className="text-lg  font-bold flex items-center gap-2">
        <PiShieldCheckFill size={30} color="green" />
        Trusted by forward-thinking engineering teams at
      </p>
      <Marquee
        className=" text-lg font-bold text-gray-600 border border-dashed border-gray-300 py-4"
        direction="left"
      >
        {companies}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
