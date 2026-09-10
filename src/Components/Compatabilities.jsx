import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import { SiMusicbrainz } from "react-icons/si";

const Compatabilities = () => {
  return (
    <div className="my-20 flex flex-col items-center justify-center w-11/12 mx-auto">
      <div className="badge badge-soft badge-primary font-bold text-blue-600">
        <RiGeminiFill />
        Core Capabilities
      </div>
      <p className="text-3xl mt-5 font-bold text-gray-600 text-center">
        Autonomous Cloud Workflows Powered by<br></br> Innovative AI Engines
      </p>
      <p className="text-lg  font-semibold text-gray-600  text-center">
        Eliminate manual DevOps overhead. Let intelligent agents orchestrate
        your infrastructure across multi-cloud environments.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="card card-border bg-base-100 w-full shadow-lg">
          <div className="card-body">
            <SiMusicbrainz color="blue" size={30} />
            <h2 className="card-title">Autonomous Agent Mesh</h2>
            <p>
              Self-healing, proactive telemetry across multi-cloud clusters with
              predictive machine learning and automated deduplication.
            </p>
            <div className="card-actions ">
              <p className="text-sm font-semibold text-blue-600">
                Zero Human Config
              </p>
            </div>
          </div>
        </div>
        <div className="card card-border bg-base-100 w-full shadow-lg">
          <div className="card-body">
            <IoShieldCheckmarkSharp color="green" size={30} />
            <h2 className="card-title">End-to-End Encryption</h2>
            <p>
              SOC2 Type II & HIPAA compliant with AES-256 GCM protocol and
              zero-knowledge architecture ensuring total payload privacy.
            </p>
            <div className="card-actions ">
              <p className="text-sm font-semibold text-green-600">
                SOC2 & HIPAA Compliant
              </p>
            </div>
          </div>
        </div>
        <div className="card card-border bg-base-100 w-full shadow-lg">
          <div className="card-body">
            <FaTachometerAlt color="purple" size={30} />
            <h2 className="card-title">Real-Time Telemetry</h2>
            <p>
              Less than 12ms telemetry latency, millisecond-level packet stream
              routing, live bottleneck resolution, and global node health
              diagnostics.
            </p>
            <div className="card-actions ">
              <p className="text-sm font-semibold text-purple-600">
                Less than 12ms Engine Latency
              </p>
            </div>
          </div>
        </div>
        <div className="card card-border bg-base-100 w-full shadow-lg">
          <div className="card-body">
            <SiMusicbrainz color="blue" size={30} />
            <h2 className="card-title">Autonomous Agent Mesh</h2>
            <p>
              Self-healing, proactive telemetry across multi-cloud clusters with
              predictive machine learning and automated deduplication.
            </p>
            <div className="card-actions ">
              <p className="text-sm font-semibold text-blue-600">
                Zero Human Config
              </p>
            </div>
          </div>
        </div>
        <div className="card card-border bg-base-100 w-full shadow-lg">
          <div className="card-body">
            <IoShieldCheckmarkSharp color="green" size={30} />
            <h2 className="card-title">End-to-End Encryption</h2>
            <p>
              SOC2 Type II & HIPAA compliant with AES-256 GCM protocol and
              zero-knowledge architecture ensuring total payload privacy.
            </p>
            <div className="card-actions ">
              <p className="text-sm font-semibold text-green-600">
                SOC2 & HIPAA Compliant
              </p>
            </div>
          </div>
        </div>
        <div className="card card-border bg-base-100 w-full shadow-lg">
          <div className="card-body">
            <FaTachometerAlt color="purple" size={30} />
            <h2 className="card-title">Real-Time Telemetry</h2>
            <p>
              Less than 12ms telemetry latency, millisecond-level packet stream
              routing, live bottleneck resolution, and global node health
              diagnostics.
            </p>
            <div className="card-actions ">
              <p className="text-sm font-semibold text-purple-600">
                Less than 12ms Engine Latency
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compatabilities;
