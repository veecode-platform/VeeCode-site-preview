import { LayoutProps, PageProps } from "@/lib/@types/pageProps";
import { HeroSection } from "./components/HeroSection";
import { PluginsSection } from "./components/PluginsSection";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ScrollTop } from "@/components/ui/ScrollTop";
import { getPluginCards } from "@/lib/getPluginsData";

export async function generateMetadata(props: Omit<LayoutProps, "children">) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("resources.title"),
    description: t("resources.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ResourcesPage({ params }: PageProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "resources" });

  const pluginsCards = getPluginCards(locale);

  return (
    <main className="self-center flex w-full max-w-[1268px] flex-col items-stretch px-4 my-10">
      <HeroSection title={t("title")} description={t("description")} />
      <PluginsSection pluginsCards={pluginsCards} />
      <ScrollTop />
    </main>
  );
}
