"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/animations";

interface HeroProps {
  title: string;
  description: string;
  buttonLabel1: string;
  buttonLabel2: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttonLabel1,
  buttonLabel2,
}) => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex w-full max-w-[1204px] flex-col items-center text-black text-center px-5">
        <ScrollReveal>
          <h1
            className="text-5xl font-bold max-md:text-3xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p
            className="text-xl font-normal mt-[23px] max-w-[705px] max-md:max-w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.2}>
        <div className="flex items-center gap-[23px] text-base mt-[31px]">
          <Button variant="default" size="sm" aria-label={buttonLabel1} disabled>
            {buttonLabel1}
          </Button>
          <a href="#early-access">
            <Button variant="outline" size="sm" aria-label={buttonLabel2}>
              {buttonLabel2}
            </Button>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Hero;
