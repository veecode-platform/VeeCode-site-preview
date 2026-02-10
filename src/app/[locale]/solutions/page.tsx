import { LayoutProps, PageProps } from "@/lib/@types/pageProps";
import CTASection from "../ui/solutions/CTASection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("solutions.title"),
    description: t("solutions.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function SolutionsPage({ params }: PageProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "solutions" });
  const a = await getTranslations({ locale, namespace: "accessibility" });

  const servicesCards = [
    {
      id: 1,
      title: t("services-section.cards.card1.title"),
      description: t("services-section.cards.card1.description"),
      buttonLabel1: t("services-section.cards.card1.buttons.button1.label"),
      buttonLabel2: t("services-section.cards.card1.buttons.button2.label"),
      externalLink:
        "https://aws.amazon.com/marketplace/pp/prodview-aybwnwq4fx2ts?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
      descriptionExternalLink: a("external-links.aws.ami"),
    },
    {
      id: 2,
      title: t("services-section.cards.card2.title"),
      description: t("services-section.cards.card2.description"),
      buttonLabel1: t("services-section.cards.card2.buttons.button1.label"),
      buttonLabel2: t("services-section.cards.card2.buttons.button2.label"),
      externalLink:
        "https://aws.amazon.com/marketplace/pp/prodview-7pqhop2z4kkx2?sr=0-4&ref_=beagle&applicationId=AWSMPContessa",
      descriptionExternalLink: a("external-links.aws.lauch-workshop"),
    },
    {
      id: 3,
      title: t("services-section.cards.card3.title"),
      description: t("services-section.cards.card3.description"),
      buttonLabel1: t("services-section.cards.card3.buttons.button1.label"),
      buttonLabel2: t("services-section.cards.card3.buttons.button2.label"),
      externalLink:
        "https://aws.amazon.com/marketplace/pp/prodview-bckwzbve7ftgw?sr=0-3&ref_=beagle&applicationId=AWSMPContessa",
      descriptionExternalLink: a("external-links.aws.fast-track"),
    },
  ];

  return (
    <main className="bg-white flex flex-col overflow-hidden items-center">
      <HeroSection title={t("hero.title")} subtitle={t("hero.description")} />
      <ServicesSection cards={servicesCards} />
      <CTASection
        title={t("cta-section.title")}
        description={t("cta-section.description")}
        buttonText={t("cta-section.button.label")}
      />
    </main>
  );
}
