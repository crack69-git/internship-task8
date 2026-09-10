import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdPreview } from "react-icons/md";

const HomepageSection = () => {
  return (
    <div className="animate__animated animate__fadeInUp animate__delay-0.5s max-sm:w-11/12 max-sm:mx-auto flex flex-col items-center justify-center text-center ">
      <div className="py-10">
        <div className="badge badge-soft badge-accent mb-5 text-[16px] text-sky-500">
          <div className="inline-grid *:[grid-area:1/1]">
            <div className="status status-error animate-ping"></div>
            <div className="status status-error"></div>
          </div>
          AuraSync 2.0 Is Live Now
        </div>
        <p className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-5">
          Next-Gen Cloud Automation <br></br>AND <br></br>
          <span className="text-sky-800">AI-Driven Observability Platform</span>
        </p>
        <p className=" text-sm sm:text-[16px] md:text-lg font-semibold text-gray-600 mb-5 w-11/12  lg:w-3/5 max-sm:text-center  mx-auto">
          AuraSync 2.0 is a cutting-edge cloud automation and observability
          platform that leverages the power of artificial intelligence to
          streamline and optimize your cloud infrastructure. Experience the
          future of cloud management with AuraSync 2.0.
        </p>
        <div className="max-sm:w-11/12 max-sm:mx-auto flex max-sm:flex-col items-center gap-2 justify-center">
          <button className="max-sm:w-full btn btn-primary">
            <FaLocationArrow />
            Get Started For Free
          </button>
          <button className="max-sm:w-full btn btn-soft text-blue-900">
            <MdPreview size={20} />
            Preview Live Demo
          </button>
        </div>
        <div className="flex max-sm:flex-col items-center gap-2 justify-center mt-5">
          <div className="flex items-center gap-2">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-9">
                  <img
                    alt="Tailwind-CSS-Avatar-component"
                    src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-9">
                  <img
                    alt="Tailwind-CSS-Avatar-component"
                    src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-9">
                  <img
                    alt="Tailwind-CSS-Avatar-component"
                    src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
                  />
                </div>
              </div>
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-9">
                  <span>+99</span>
                </div>
              </div>
            </div>
            <p className="max-sm:text-[16px] text-lg font-bold text-gray-600">
              1,000+ Users
            </p>
          </div>
          <p className="bg-gray-300 h-10 w-0.5 max-sm:hidden"></p>
          <div className="flex items-center gap-2">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
                disabled
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                defaultChecked
                disabled
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
                defaultChecked
                disabled
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
                defaultChecked
                disabled
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
                disabled
              />
            </div>
            <p className="text-lg max-sm:text-[16px] font-bold text-gray-600">
              4/5 Average Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSection;
