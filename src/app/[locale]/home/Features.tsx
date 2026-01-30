"use client";

import React from "react";
import FeatureCard from "./FeatureCard";
import { BsStars } from "react-icons/bs";
import { ExternalLink, NavigationLink } from "@/components/ui/links";
import { Button } from "@/components/ui/Button";
import Content from "@/components/layout/Content";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/animations";

export type FeatureCard = {
  id: number;
  icon: string;
  metric: string;
  title: string;
  subtitle?: string;
};
interface FeaturesProps {
  label?: string;
  title: string;
  subtitle?: string;
  description?: string;
  buttonLabel1?: string;
  buttonLabel2?: string;
  descriptionExternalLink?: string;
  cards: FeatureCard[];
}

const Features: React.FC<FeaturesProps> = ({
  label,
  title,
  subtitle,
  description,
  buttonLabel1,
  buttonLabel2,
  descriptionExternalLink,
  cards,
}) => {
  return (
    <section className="max-w-[1204px] mx-auto flex flex-col items-center px-5">
      {label && (
        <ScrollReveal>
          <div className="items-center border border-[color:var(--Preto,#000)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex min-h-[54px] gap-2 text-base text-[#1e1e1e] font-medium text-center leading-[1.6] bg-neutral-50 px-4 rounded-[30px] border-solid">
            <BsStars className="w-5 h-5 self-stretch shrink-0 my-auto text-[#33ffcd]" />
            <div className="self-stretch my-auto">{label}</div>
          </div>
        </ScrollReveal>
      )}
      <Content>
        <ScrollReveal delay={0.1}>
          <h2 className="text-black text-center text-5xl font-bold mt-[37px] max-md:text-3xl">
            {title}
          </h2>
        </ScrollReveal>
        {subtitle && (
          <ScrollReveal delay={0.2}>
            <p className="text-[#1e1e1e] text-center text-base font-normal mt-2 max-md:max-w-full">
              {subtitle}
            </p>
          </ScrollReveal>
        )}
        {description && (
          <ScrollReveal delay={0.3}>
            <p className="text-[#1e1e1e] text-center text-xl font-normal mt-[21px] max-md:max-w-full">
              {description}
            </p>
          </ScrollReveal>
        )}
        {(buttonLabel1 || buttonLabel2) && (
          <ScrollReveal delay={0.4}>
            <div className="flex min-h-[52px] items-center gap-[23px] text-base mt-[31px]">
              {buttonLabel1 && (
                <NavigationLink href="/contact-us">
                  <Button variant="default" size="sm" aria-label={buttonLabel1}>
                    {buttonLabel1}
                  </Button>
                </NavigationLink>
              )}
              {buttonLabel2 && descriptionExternalLink && (
                <ExternalLink
                  description={descriptionExternalLink}
                  href="https://docs.platform.vee.codes/devportal/installation-guide/VKDR/"
                  event="vkdrDocs"
                >
                  <Button variant="outline" size="sm" aria-label={buttonLabel2}>
                    {buttonLabel2}
                  </Button>
                </ExternalLink>
              )}
            </div>
          </ScrollReveal>
        )}
      </Content>

      <div className="w-full max-w-[1257px] max-md:max-w-full mt-20">
        <StaggerContainer className="w-full grid grid-cols-3 gap-5 max-md:grid-cols-1" staggerDelay={0.1}>
          {cards.map((card) => (
            <StaggerItem key={card.id}>
              <FeatureCard
                icon={card.icon}
                metric={card.metric}
                title={card.title}
                subtitle={card.subtitle}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Features;
