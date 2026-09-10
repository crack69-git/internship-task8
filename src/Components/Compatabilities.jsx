import React from "react";
import { FaCloudDownloadAlt, FaTachometerAlt } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiGeminiFill } from "react-icons/ri";
import { SiMusicbrainz } from "react-icons/si";

const Compatabilities = () => {
  return (
    <div
      id="features"
      className="my-20 flex flex-col items-center justify-center w-11/12 mx-auto"
    >
      <div className="badge badge-soft badge-primary font-bold text-blue-600">
        <RiGeminiFill />
        Core Capabilities
      </div>
      <p className="max-sm:text-xl text-3xl mt-5 font-bold text-gray-600 text-center">
        Autonomous Cloud Workflows Powered by<br className="max-sm:hidden"></br>{" "}
        Innovative AI Engines
      </p>
      <p className="max-sm:my-5 max-sm:text-sm text-lg  font-semibold text-gray-600  text-center">
        Eliminate manual DevOps overhead. Let intelligent agents orchestrate
        your infrastructure across multi-cloud environments.
      </p>
      <div className="grid max-sm:grid-cols-1 grid-cols-3 gap-4 mt-5">
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
            <FaCloudDownloadAlt color="blue" size={30} />
            <h2 className="card-title">Multi-Cloud Architecture</h2>
            <p>
              Seamless bridging across AWS S3, Cloudflare R2, Google Cloud
              Storage, and Azure Blob with zero vendor lock-in.
            </p>
            <div className="card-actions ">
              <p className="text-sm font-semibold text-blue-600">
                AWS + GCP + Azure Bridge
              </p>
            </div>
          </div>
        </div>
        <div className="card card-border bg-base-100 w-full shadow-lg">
          <div className="card-body">
            <MdDashboardCustomize color="green" size={30} />
            <h2 className="card-title">Custom API Pipelines</h2>
            <p>
              Declarative pipelines with zero-code triggers, GraphQL & OpenAPI
              3.1 support that integrate seamlessly into your existing CI/CD.
            </p>
            <div className="card-actions ">
              <p className="text-sm font-semibold text-green-600">
                OpenAPI 3.1 & GraphQL
              </p>
            </div>
          </div>
        </div>
        <div className="card card-border bg-base-100 w-full shadow-lg">
          <div className="card-body">
            <PiUsersThreeFill color="purple" size={30} />
            <h2 className="card-title">Team Collaboration & RBAC</h2>
            <p>
              Enterprise SSO, SAML 2.0, multi-tenant workspace isolation, and
              granular audit trail logs to protect mission-critical operations.
            </p>
            <div className="card-actions ">
              <p className="text-sm font-semibold text-purple-600">
                Enterprise SSO & SAML
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compatabilities;
