import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  altText?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  altText,
}) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md h-full flex flex-col">
      <Image
        src={icon}
        alt={altText || title}
        className="object-contain w-16 h-16 mb-4"
        width={64}
        height={64}
        unoptimized
      />
      <h3 className="text-xl font-semibold text-slate-900 mb-3">
        {title}
      </h3>
      <p className="text-base text-gray-600 leading-relaxed flex-1">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
