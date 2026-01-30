"use client";

import React from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

interface IdealForProps {
  headline: string;
  yesTitle: string;
  yesItems: string[];
  noTitle: string;
  noItems: string[];
}

const IdealFor: React.FC<IdealForProps> = ({
  headline,
  yesTitle,
  yesItems,
  noTitle,
  noItems,
}) => {
  return (
    <section className="bg-white py-[86px] self-stretch w-full px-[120px] max-md:px-5">
      <ScrollReveal>
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900 max-md:text-3xl">
          {headline}
        </h2>
      </ScrollReveal>
      <StaggerContainer className="grid grid-cols-2 gap-8 max-w-5xl mx-auto max-md:grid-cols-1" staggerDelay={0.15}>
        <StaggerItem>
          <div className="bg-green-50 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{yesTitle}</h3>
            <ul className="space-y-4">
              {yesItems.map((item, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="bg-red-50 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{noTitle}</h3>
            <ul className="space-y-4">
              {noItems.map((item, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
};

export default IdealFor;
