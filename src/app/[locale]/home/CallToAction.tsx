"use client";

import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/animations";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}

// HubSpot form component for Early Access signup
const EmailSignupForm: React.FC = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formCreatedRef = useRef(false);

  useEffect(() => {
    // Prevent duplicate form creation
    if (formCreatedRef.current) return;

    const createForm = () => {
      if (window.hbspt && formContainerRef.current) {
        // Clear any existing content
        formContainerRef.current.innerHTML = "";

        window.hbspt.forms.create({
          portalId: "48576194",
          formId: "fc26de6f-8d62-4328-8814-675a29ce0d4c",
          region: "na1",
          target: "#hubspot-form-container",
        });
        formCreatedRef.current = true;
      }
    };

    // Check if HubSpot script is already loaded
    if (window.hbspt) {
      createForm();
      return;
    }

    // Load HubSpot script dynamically
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = createForm;
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount if needed
      formCreatedRef.current = false;
    };
  }, []);

  return (
    <div className="mt-8">
      <div
        id="hubspot-form-container"
        ref={formContainerRef}
        className="hubspot-form-wrapper"
      />
    </div>
  );
};

const CallToAction: React.FC = () => {
  const t = useTranslations("home.call-to-action.early-access");

  return (
    <section id="early-access" className="w-full bg-[#33FFCE] text-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="mx-auto mb-8 text-center">
            <span className="inline-block bg-black/10 px-6 py-3 rounded-full text-xl font-bold animate-pulse-subtle">
              {t("badge")}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-5xl font-bold text-center mb-6">
            {t("title")}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-xl text-center mb-16 text-gray-800">
            {t("subtitle")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              {t("box-title")}
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-lg">
                <span className="text-green-600 shrink-0">✅</span>
                {t("benefit1")}
              </li>
              <li className="flex items-start gap-3 text-lg">
                <span className="text-green-600 shrink-0">✅</span>
                {t("benefit2")}
              </li>
              <li className="flex items-start gap-3 text-lg">
                <span className="text-green-600 shrink-0">✅</span>
                {t("benefit3")}
              </li>
              <li className="flex items-start gap-3 text-lg">
                <span className="text-green-600 shrink-0">✅</span>
                {t("benefit4")}
              </li>
            </ul>

            <hr className="my-8 border-gray-200" />

            <EmailSignupForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CallToAction;
