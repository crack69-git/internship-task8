"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaMagic, FaRobot } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiTimeBomb } from "react-icons/gi";
import { IoMdTimer } from "react-icons/io";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbAiAgent } from "react-icons/tb";

const WhySection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.9 }, // triggers when 90% is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={sectionRef}
      id="benefits"
      className={`animate__animated ${isVisible ? "animate__zoomIn" : ""} animate__delay-1s w-11/12 mx-auto`}
    >
      <div className="card card-border bg-slate-800 text-white w-full">
        <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-8 p-10">
          <div>
            <span className="badge bg-slate-900 text-purple-100 border-none">
              Why AuraSync?
            </span>
            <h3 className="text-3xl mt-5 font-bold text-white">
              Unmatched Velocity, Resilience, and Infrastructure Cost
              Optimization
            </h3>
            <p className="text-[16px]  font-semibold text-gray-300 mt-5">
              Legacy cloud pipelines depend on brittle scripts and slow manual
              jobs. AuraSync’s autonomous neural orchestration engine
              dynamically calculates optimal byte transfer paths in real time.
            </p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-300">
              <p className="bg-slate-900 py-2 px-5 rounded-lg w-full">
                <span className="text-2xl font-bold text-sky-200 flex items-center gap-2">
                  <LiaShippingFastSolid />
                  10X
                </span>{" "}
                Faster Deployments
              </p>
              <p className="bg-slate-900 py-2 px-5 rounded-lg w-full">
                <span className="text-2xl font-bold text-purple-200 flex items-center gap-2">
                  <FcMoneyTransfer />
                  40%
                </span>{" "}
                Cloud Cost Reduction
              </p>
              <p className="bg-slate-900 py-2 px-5 rounded-lg w-full">
                <span className="text-2xl font-bold text-white flex items-center gap-2">
                  <IoMdTimer />
                  99.99%
                </span>{" "}
                Guaranteed Uptime
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="card card-border bg-slate-900 border-none w-full h-full">
                <div className="card-body">
                  <FaMagic size={30} color="skyblue" />
                  <h2 className="card-title">Self-Healing Network</h2>
                  <p>
                    If an outage or latency spike occurs in any cloud zone,
                    network traffic automatically diverts to the nearest healthy
                    cluster nodes.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-border bg-slate-900 border-none w-full h-full">
                <div className="card-body">
                  <FaRobot size={30} color="purple" />
                  <h2 className="card-title">Intelligent Data Tiering</h2>
                  <p>
                    Dormant data is intelligently shifted into low-cost cold
                    storage while active vector indices stay warm in memory,
                    slashing cloud egress fees.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-border bg-slate-900 border-none w-full h-full">
                <div className="card-body">
                  <TbAiAgent size={30} color="green" />
                  <h2 className="card-title">Multi-Agent Coordination</h2>
                  <p>
                    Distributed AI agents harmonize concurrent writes across
                    availability zones to preempt conflicts and maintain
                    high-fidelity replication.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card card-border bg-slate-900 border-none w-full h-full">
                <div className="card-body">
                  <GiTimeBomb size={30} color="purple" />
                  <h2 className="card-title">Time-Bound Operations</h2>
                  <p>
                    Operations that must be completed within a specific time
                    frame to ensure data consistency and system reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
