"use client";

import React from "react";
import {
  LuLayoutGrid,
  LuTarget,
  LuLink,
  LuBot,
  LuChartColumnIncreasing,
  LuShieldCheck,
} from "react-icons/lu";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

const iconMap: Record<string, React.ElementType> = {
  catalog: LuLayoutGrid,
  golden: LuTarget,
  integrations: LuLink,
  ai: LuBot,
  observability: LuChartColumnIncreasing,
  security: LuShieldCheck,
};

interface FeatureCard {
  icon: string;
  title: string;
  features: string[];
}

interface PlatformBenefitsProps {
  headline: string;
  subheading: string;
  cards: FeatureCard[];
}

const PlatformBenefits: React.FC<PlatformBenefitsProps> = ({
  headline,
  subheading,
  cards,
}) => {
  return (
    <section className="w-full bg-[#13151A] text-white py-24">
      <div className="max-w-[1204px] mx-auto px-5">
        <ScrollReveal>
          <h2 className="text-5xl font-bold text-center mb-6 max-md:text-3xl">
            {headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-xl text-gray-400 text-center mb-16 whitespace-pre-line max-md:text-lg">
            {subheading}
          </p>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {cards.map((card, index) => {
            const IconComponent = iconMap[card.icon];
            return (
            <StaggerItem key={index}>
              <div className="bg-[#1C1F25] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                {IconComponent ? (
                  <div className="w-14 h-14 rounded-xl bg-[#1a2e2a] flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-[#33FFCE]" />
                  </div>
                ) : (
                  <span className="text-[64px] leading-none block mb-4">
                    {card.icon}
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#33FFCE] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PlatformBenefits;
