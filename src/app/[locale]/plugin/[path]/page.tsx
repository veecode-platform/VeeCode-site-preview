import fs from "fs";
import path from "path";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { PluginContent } from "../../ui/plugin/PluginContent";
import { getAllPlugins, getPluginByPath } from "@/lib/getPluginsData";

type Props = {
  params: Promise<{ locale: Locale; path: string }>;
};

export async function generateMetadata(props: Props) {
  const { locale, path } = await props.params;
  const plugin = getPluginByPath(locale, path);

  return {
    title: `VeeCode Platform | ${plugin.title ?? path}`,
    description:
      plugin.desc ||
      "Choose the technology that is most compatible with your business.",
  };
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) => {
    const plugins = getAllPlugins(locale);
    return plugins.map((plugin) => ({
      locale,
      path: plugin.path,
    }));
  });
}

function getPreCachedReadme(pluginPath: string): string | undefined {
  const readmePath = path.join(
    process.cwd(),
    "src/data/plugins/readmes",
    `${pluginPath}.md`
  );
  try {
    return fs.readFileSync(readmePath, "utf-8");
  } catch {
    return undefined;
  }
}

export default async function PluginDocPage(props: Props) {
  const { locale, path: pluginPath } = await props.params;
  // Enable static rendering
  setRequestLocale(locale);

  const pluginData = getPluginByPath(locale, pluginPath);
  const readmeContent = getPreCachedReadme(pluginPath);

  return (
    <main className="min-h-[75vh] self-center flex w-full max-w-[1268px] flex-col items-stretch px-4">
      <section className="w-full flex justify-center items-center flex-col py-20 md:p-[160px] text-black rounded-md">
        <PluginContent pluginData={pluginData} {...(readmeContent ? { readmeContent } : {})} />
      </section>
    </main>
  );
}
