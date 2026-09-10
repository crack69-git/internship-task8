"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TbGlobe, TbLockCheck } from "react-icons/tb";

const FooterSection = () => {
  return (
    <div>
      <footer className="relative bg-[#07090e] p-4 md:p-8 text-slate-300 font-sans">
        {/* Outer Card Container */}
        <div className="max-w-7xl mx-auto bg-[#0b101b] border border-slate-800/80 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Top Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
            {/* Brand Info Column */}
            <div className="md:col-span-5 flex flex-col justify-between pr-0 md:pr-6">
              <div>
                {/* Logo & Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-500/30 flex items-center justify-center text-sky-400 p-1.5 shadow-inner">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="12" cy="12" r="8" strokeDasharray="4 2" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight">
                    AuraSync
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
                  Next-generation AI orchestration, real-time autonomous data
                  synchronization, and frictionless cross-cloud workflows
                  designed for hyper-scaling enterprise teams.
                </p>
              </div>

              {/* Status Pill */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </span>
                  <span>All Cloud Nodes Operational</span>
                </div>
              </div>
            </div>

            {/* Links Column 1: Platform */}
            <div className="md:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
                Platform
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links Column 2: Company */}
            <div className="md:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
                Company
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Security & Trust
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Enterprise SLA
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Newsletter Form */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
                Stay Synchronized
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Receive curated updates on autonomous automation patterns and
                engine releases.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="input w-full bg-[#080d16] border border-slate-700/60 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 rounded-full px-4 h-10 text-xs transition-all duration-200"
                />
                <button
                  type="submit"
                  className="btn w-full bg-[#163044] hover:bg-[#1a3a52] text-cyan-300 font-medium border border-cyan-800/40 rounded-full h-10 min-h-[40px] text-xs transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar Section */}
          <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div>
              © {new Date().getFullYear()} AuraSync Technologies Inc. All rights
              reserved.
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-slate-400">
                <TbGlobe className="w-4 h-4 text-slate-400" />
                <span>Global Edge</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <TbLockCheck className="w-4 h-4 text-slate-400" />
                <span>SOC2 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
