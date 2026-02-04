import React from "react";
import FeatureCard from "./FeatureCard";

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  altText?: string;
}

interface FeatureSectionProps {
  headline: string;
  subheading: string;
  features: Feature[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  headline,
  subheading,
  features,
}) => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-slate-900 mb-4">
          {headline}
        </h1>
        <p className="text-2xl text-gray-600 text-center mb-16">
          {subheading}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              altText={feature.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
