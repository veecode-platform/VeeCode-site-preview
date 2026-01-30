import Hero from "./home/Hero";
import ClientLogos from "./home/ClientLogos";
import Features from "./home/Features";
import PlatformBenefits from "./home/PlatformBenefits";
import IdealFor from "./home/Testimonials";
import CallToAction from "./home/CallToAction";
import { PageProps } from "@/lib/@types/pageProps";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Chatbot } from "@/components/ui/Chatbot";

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const a = await getTranslations({ locale, namespace: "accessibility" });

  const featureCards = [
    {
      id: 1,
      icon: t("feature.card1.icon"),
      metric: t("feature.card1.metric"),
      title: t("feature.card1.title"),
      subtitle: t("feature.card1.subtitle"),
    },
    {
      id: 2,
      icon: t("feature.card2.icon"),
      metric: t("feature.card2.metric"),
      title: t("feature.card2.title"),
      subtitle: t("feature.card2.subtitle"),
    },
    {
      id: 3,
      icon: t("feature.card3.icon"),
      metric: t("feature.card3.metric"),
      title: t("feature.card3.title"),
      subtitle: t("feature.card3.subtitle"),
    },
    {
      id: 4,
      icon: t("feature.card4.icon"),
      metric: t("feature.card4.metric"),
      title: t("feature.card4.title"),
      subtitle: t("feature.card4.subtitle"),
    },
    {
      id: 5,
      icon: t("feature.card5.icon"),
      metric: t("feature.card5.metric"),
      title: t("feature.card5.title"),
      subtitle: t("feature.card5.subtitle"),
    },
    {
      id: 6,
      icon: t("feature.card6.icon"),
      metric: t("feature.card6.metric"),
      title: t("feature.card6.title"),
      subtitle: t("feature.card6.subtitle"),
    },
  ];

  const benefitsCards = [
    {
      icon: "catalog",
      title: t("benefits.card1.title"),
      features: [
        t("benefits.card1.f1"),
        t("benefits.card1.f2"),
        t("benefits.card1.f3"),
        t("benefits.card1.f4"),
      ],
    },
    {
      icon: "golden",
      title: t("benefits.card2.title"),
      features: [
        t("benefits.card2.f1"),
        t("benefits.card2.f2"),
        t("benefits.card2.f3"),
      ],
    },
    {
      icon: "integrations",
      title: t("benefits.card3.title"),
      features: [
        t("benefits.card3.f1"),
        t("benefits.card3.f2"),
        t("benefits.card3.f3"),
        t("benefits.card3.f4"),
      ],
    },
    {
      icon: "ai",
      title: t("benefits.card4.title"),
      features: [
        t("benefits.card4.f1"),
        t("benefits.card4.f2"),
      ],
    },
    {
      icon: "observability",
      title: t("benefits.card5.title"),
      features: [
        t("benefits.card5.f1"),
        t("benefits.card5.f2"),
      ],
    },
    {
      icon: "security",
      title: t("benefits.card6.title"),
      features: [
        t("benefits.card6.f1"),
        t("benefits.card6.f2"),
        t("benefits.card6.f3"),
      ],
    },
  ];

  const idealForYesItems = [
    t("ideal-for.yes-1"),
    t("ideal-for.yes-2"),
    t("ideal-for.yes-3"),
    t("ideal-for.yes-4"),
    t("ideal-for.yes-5"),
    t("ideal-for.yes-6"),
  ];

  const idealForNoItems = [
    t("ideal-for.no-1"),
    t("ideal-for.no-2"),
    t("ideal-for.no-3"),
  ];

  return (
    <main className="flex flex-col justify-center items-center py-20 gap-20">
      <Hero
        title={t("hero.title")}
        description={t("hero.description")}
        buttonLabel1={t("hero.buttons.button1.label")}
        buttonLabel2={t("hero.buttons.button2.label")}
        descriptionExternalLink={a("external-links.docs")}
      />
      <ClientLogos label={t("clients.label")} />
      <Features
        label={t("feature.label") || undefined}
        title={t("feature.title")}
        subtitle={t("feature.subtitle") || undefined}
        description={t("feature.description") || undefined}
        buttonLabel1={t("feature.buttons.button1.label") || undefined}
        buttonLabel2={t("feature.buttons.button2.label") || undefined}
        descriptionExternalLink={a("external-links.docs")}
        cards={featureCards}
      />
      <PlatformBenefits
        headline={t("benefits.headline")}
        subheading={t("benefits.subheading")}
        cards={benefitsCards}
      />
      <IdealFor
        headline={t("ideal-for.headline")}
        yesTitle={t("ideal-for.yes-title")}
        yesItems={idealForYesItems}
        noTitle={t("ideal-for.no-title")}
        noItems={idealForNoItems}
      />
      <CallToAction />
      <Chatbot />
    </main>
  );
}
