import React from "react";
import {
  LuClock,
  LuLock,
  LuBookOpen,
  LuFlame,
  LuContainer,
  LuDollarSign,
} from "react-icons/lu";

interface FeatureCardProps {
  icon: string;
  metric: string;
  title: string;
  subtitle?: string;
}

const iconMap: Record<string, React.ElementType> = {
  clock: LuClock,
  lock: LuLock,
  book: LuBookOpen,
  fire: LuFlame,
  deploy: LuContainer,
  dollar: LuDollarSign,
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  metric,
  title,
  subtitle,
}) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="bg-white rounded-xl p-8 shadow-md flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {IconComponent && (
        <div className="w-16 h-16 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
          <IconComponent className="w-8 h-8 text-orange-500" />
        </div>
      )}
      <p className="text-3xl font-bold text-orange-500">{metric}</p>
      <p className="text-xl font-semibold text-black mt-2">{title}</p>
      {subtitle && (
        <p className="text-base font-normal text-gray-500 mt-1">{subtitle}</p>
      )}
    </div>
  );
};

export default FeatureCard;
