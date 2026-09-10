import React from "react";

const QuestionSection = () => {
  const faqs = [
    {
      question:
        "How does AuraSync connect with our existing cloud infrastructure?",
      answer:
        "AuraSync integrates seamlessly with your existing cloud infrastructure through secure APIs, connectors, and automation tools. It supports major cloud providers and can work alongside your current DevOps, monitoring, and deployment workflows without requiring a complete infrastructure overhaul.",
    },
    {
      question: "Is my enterprise data completely secure?",
      answer:
        "Yes. AuraSync is designed with enterprise-grade security, including encryption in transit and at rest, strict access controls, zero-knowledge architecture, and compliance-focused security practices to help protect sensitive business data.",
    },
    {
      question: "Can I change or cancel my subscription at any time?",
      answer:
        "Yes. You can upgrade, downgrade, or cancel your AuraSync subscription at any time. Changes are applied according to the terms of your current billing cycle, with no long-term commitment required.",
    },
    {
      question: "Do I need a credit card to get started with the free tier?",
      answer:
        "No. You can get started with the free tier without providing a credit card. You can explore the core features first and add billing information when you decide to upgrade.",
    },
    {
      question: "Do you offer self-hosted / On-Premise enterprise deployments?",
      answer:
        "Yes. AuraSync offers self-hosted and on-premise deployment options for eligible enterprise customers that require greater control over their infrastructure, data, networking, and security policies.",
    },
  ];

  return (
    <div
      id="faq"
      className="my-20 max-sm:w-11/12  w-3/5 mx-auto flex flex-col justify-center items-center"
    >
      <div className="badge badge-soft badge-info">
        Frequently Asked Questions
      </div>
      <div className="max-sm:text-center">
        <p className="max-sm:text-xl max-sm:font-extrabold text-3xl  font-bold mt-5">
          Everything You Need to Know About AuraSync
        </p>
        <p className="max-sm:text-sm text-lg  font-semibold text-gray-600 text-center mt-2">
          Quick answers to common questions about architecture, compliance, and
          deployment.
        </p>
      </div>
      <div className="mt-10 w-full flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="max-sm:text-[16px] collapse-title text-lg font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSection;
