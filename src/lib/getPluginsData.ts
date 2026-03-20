import pluginsData from "../data/plugins/plugins.json";
import { IPlugin } from "./@types/plugin";

export function getAllPlugins(locale: string) {
  if (locale === "pt") return pluginsData.pt as IPlugin[];
  return pluginsData.en as IPlugin[];
}

export function getPluginByPath(locale: string, path: string) {
  const AllPlugins = getAllPlugins(locale);
  return AllPlugins.find((plugin) => plugin.path === path) as IPlugin;
}

export function getPluginCards(locale: string) {
  const plugins = getAllPlugins(locale);
  return plugins.map((plugin) => ({
    icon: plugin.image,
    title: plugin.title,
    path: plugin.path,
    tags: plugin.tags.map((tag) => ({ name: tag })),
    description: plugin.desc,
  }));
}
