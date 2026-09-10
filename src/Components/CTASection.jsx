import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TbClockCheck, TbCreditCardOff, TbRocket, TbX } from "react-icons/tb";

const CTASection = () => {
  return (
    <div>
      <section className=" flex items-center justify-center p-4 md:p-8">
        {/* Container Card */}
        <div className="relative w-full max-w-5xl bg-gradient-to-b from-[#162032]/80 to-[#101726]/90 border border-slate-800/80 rounded-3xl p-8 md:p-16 shadow-2xl backdrop-blur-md text-center overflow-hidden">
          {/* Top Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shadow-inner">
              <TbRocket className="w-6 h-6 transform -rotate-12" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="max-sm:text-xl text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-4">
            Build Your Modern Autonomous <br className="hidden sm:inline" />
            AI Cloud Workflows Today
          </h2>

          {/* Subheading */}
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-10 font-normal">
            Get started in under 3 minutes. Zero configuration required.
          </p>

          {/* Form Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your work email"
              className="input w-full bg-[#0d1424]/80 border border-slate-700/60 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 rounded-full px-5 h-12 text-sm transition-all duration-200"
            />
            <button className="btn bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold border-none rounded-full px-6 h-12 min-h-[48px] w-full sm:w-auto shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap">
              Get Started
              <FaArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Feature Badges / Bullet Points */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <TbCreditCardOff className="w-4 h-4 text-slate-400" />
              <span>No credit card required</span>
            </div>

            <span className="text-slate-600 hidden sm:inline">•</span>

            <div className="flex items-center gap-1.5">
              <TbClockCheck className="w-4 h-4 text-slate-400" />
              <span>14-day full-featured trial</span>
            </div>

            <span className="text-slate-600 hidden sm:inline">•</span>

            <div className="flex items-center gap-1.5">
              <TbX className="w-4 h-4 text-slate-400 border border-slate-400 rounded-full p-[1px]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
