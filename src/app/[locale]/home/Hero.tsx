"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ExternalLink, NavigationLink } from "@/components/ui/links";
import { ScrollReveal } from "@/components/ui/animations";

interface HeroProps {
  title: string;
  description: string;
  buttonLabel1: string;
  buttonLabel2: string;
  descriptionExternalLink: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttonLabel1,
  buttonLabel2,
  descriptionExternalLink,
}) => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex w-[90vw] md:w-[800px] max-w-full flex-col items-center text-black text-center">
        <ScrollReveal>
          <h1
            className="text-[50px] font-bold max-md:max-w-full max-md:text-[40px]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p
            className="text-xl font-normal mt-[23px] max-md:max-w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.2}>
        <div className="flex items-center gap-[23px] text-base mt-[31px]">
          <NavigationLink href="/contact-us">
            <Button variant="default" size="sm" aria-label={buttonLabel1}>
              {buttonLabel1}
            </Button>
          </NavigationLink>
          <ExternalLink
            description={descriptionExternalLink}
            href="https://docs.platform.vee.codes/devportal/installation-guide/VKDR/"
            event="vkdrDocs"
          >
            <Button variant="outline" size="sm" aria-label={buttonLabel2}>
              {buttonLabel2}
            </Button>
          </ExternalLink>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Hero;
