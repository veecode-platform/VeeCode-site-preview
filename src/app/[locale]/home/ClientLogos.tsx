"use client";

import Image from "next/image";
import React from "react";

const VertigoLogo = "/assets/home/vertigo-logo.webp";
const AmbimaLogo = "/assets/home/ambima-logo.webp";
const SankhyaLogo = "/assets/home/sankhya.webp";
const CredSystemLogo = "/assets/home/credsystem-logo.webp";

interface ClientLogosProps {
  label?: string;
}

const ClientLogos: React.FC<ClientLogosProps> = ({ label }) => {
  const customers = [
    {
      id: 1,
      logo: VertigoLogo,
      alt: "Vertigo logo",
    },
    {
      id: 2,
      logo: AmbimaLogo,
      alt: "Ambima logo",
    },
    {
      id: 3,
      logo: SankhyaLogo,
      alt: "Sankhya logo",
    },
    {
      id: 4,
      logo: CredSystemLogo,
      alt: "CredSystem logo",
    },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCustomers = [...customers, ...customers];

  return (
    <section className="w-full overflow-hidden py-8">
      {label && (
        <h2 className="text-center text-xl font-medium text-[#1e1e1e] mb-6">
          {label}
        </h2>
      )}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedCustomers.map((customer, index) => (
            <div
              key={`${customer.id}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <Image
                src={customer.logo}
                alt={customer.alt}
                width={181}
                height={92}
                className="aspect-[2.24] object-contain w-[140px] md:w-[181px] grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
