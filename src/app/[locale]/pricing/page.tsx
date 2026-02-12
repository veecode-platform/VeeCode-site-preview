import { ComponentProps } from "react";
import { LayoutProps, PageProps } from "@/lib/@types/pageProps";
import CTASection from "../ui/solutions/CTASection";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { NavigationLink } from "@/components/ui/links";

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("pricing.title"),
    description: t("pricing.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

function CheckIcon() {
  return (
    <svg
      className="text-[#33FFCE] text-xl mr-3 flex-shrink-0 w-5 h-5 mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface PricingCardData {
  title: string;
  subtitle: string;
  price: string;
  period?: string;
  users: string;
  buttonText: string;
  buttonHref: ComponentProps<typeof NavigationLink>["href"];
  features: string[];
  isFreeTier?: boolean;
}

function PricingCardItem({ card }: { card: PricingCardData }) {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[rgba(51,255,206,0.1)] transition-all duration-300 hover:scale-105 hover:border-[rgba(51,255,206,0.3)] relative flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl font-bold text-black mb-3">{card.title}</h3>
        <p className="text-sm mb-8 leading-relaxed text-gray-500">
          {card.subtitle}
        </p>

        <div className="mb-8">
          <span className="text-5xl font-extrabold text-black">{card.price}</span>
          {card.period && (
            <span className="text-xl inline text-gray-400">{card.period}</span>
          )}
          <p className="text-sm mt-2 text-gray-500">
            {card.users}
          </p>
        </div>

        <NavigationLink href={card.buttonHref}>
          {card.isFreeTier ? (
            <button className="w-full py-4 bg-transparent border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-base hover:border-[#33FFCE] hover:bg-[rgba(51,255,206,0.1)] transition-all">
              {card.buttonText}
            </button>
          ) : (
            <button className="w-full py-4 bg-[#33FFCE] text-gray-800 rounded-lg font-bold text-base shadow-xl hover:bg-[#2ee6b9] hover:scale-105 transition-all">
              {card.buttonText}
            </button>
          )}
        </NavigationLink>

        <div className="border-t my-6 border-gray-200" />

        <ul className="space-y-4 mt-6">
          {card.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <CheckIcon />
              <span className="text-sm leading-relaxed text-gray-600">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default async function PricingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "solutions" });

  const pricingCards: PricingCardData[] = [
    {
      title: "SaaS",
      subtitle: "Teste agora",
      price: "R$ 0",
      period: "/month",
      users: "até 5 usuários",
      buttonText: "Comece grátis",
      buttonHref: "/contact-us",
      isFreeTier: true,
      features: [
        "Suporte",
        "Templates básicos",
        "Catálogo de Serviços",
      ],
    },
    {
      title: "Starter",
      subtitle: "Comece a construir seu IDP",
      price: "R$ 3,000",
      period: "/month",
      users: "de 5 a 10 usuários",
      buttonText: "Comece agora",
      buttonHref: "/contact-us",
      features: [
        "Suporte 8x5",
        "Suporte para plugins e templates",
        "Acesso aos nossos especialistas",
      ],
    },
    {
      title: "Basic",
      subtitle: "Comece a construir seu IDP",
      price: "R$ 21,000",
      period: "/month",
      users: "de 11 a 50 usuários",
      buttonText: "Comece agora",
      buttonHref: "/contact-us",
      features: [
        "Suporte 8x5",
        "Suporte para plugins e templates",
        "Acesso aos nossos especialistas",
      ],
    },
    {
      title: "Standard",
      subtitle: "Orquestre todos os seus serviços",
      price: "Custom",
      users: "50-200 usuários",
      buttonText: "Entre em contato",
      buttonHref: "/contact-us",
      features: [
        "Suporte 8x5",
        "Suporte para plugins e templates",
        "Acesso aos nossos especialistas",
      ],
    },
    {
      title: "Premium",
      subtitle: "Tenha controle total",
      price: "Custom",
      users: "+200 usuários",
      buttonText: "Entre em contato",
      buttonHref: "/contact-us",
      features: [
        "Suporte 24x7",
        "Suporte para plugins e templates",
        "Acesso aos nossos especialistas",
        "Oferta IDP: Features de IA",
      ],
    },
  ];

  return (
    <main className="bg-white flex flex-col overflow-hidden items-center">
      <section className="flex flex-col items-center w-full">
        <h2 className="max-w-[800px] text-[45px] text-black font-bold text-center pt-20 md:pt-0 md:mt-[101px] px-5 py-[41px] max-md:text-[32px] max-md:mt-10">
          {t("pricing.title")}
        </h2>
        <div className="w-full max-w-[1410px] md:mt-[47px] max-md:mt-10 pb-20 md:pb-0 px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pricingCards.map((card, idx) => (
              <div key={idx} className="h-full">
                <PricingCardItem card={card} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title={t("cta-section.title")}
        description={t("cta-section.description")}
        buttonText={t("cta-section.button.label")}
      />
    </main>
  );
}
