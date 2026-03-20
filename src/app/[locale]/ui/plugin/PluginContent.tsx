/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useRemark } from "react-remark";
import rehypeSlug from "rehype-slug";
import remarkGemoji from "remark-gemoji";
import { IPlugin } from "@/lib/@types/plugin";
import convertUrlToRaw from "@/lib/helpers/convertUrlToRaw";
import { ScrollTop } from "@/components/ui/ScrollTop";
import style from "./styles.module.css";

export interface PluginContentProps {
  pluginData: IPlugin;
  readmeContent?: string;
}

const LinkTag = ({ href, children }: { href: string; children: any }) => {
  const label = Array.isArray(children)
    ? children.join(" ")
    : String(children ?? "");
  return <a href={href}>{label}</a>;
};

export const PluginContent: React.FC<PluginContentProps> = ({
  pluginData,
  readmeContent,
}) => {
  const [reactContent, setMarkdownSource] = useRemark({
    remarkPlugins: [remarkGemoji] as any,
    remarkToRehypeOptions: { allowDangerousHtml: true },
    rehypePlugins: [rehypeSlug] as any,
    rehypeReactOptions: {
      components: {
        a: (props: any) => <LinkTag {...props} />,
      },
    },
    onError: (err) => console.error("Remark error:", err),
  });

  React.useEffect(() => {
    if (readmeContent) {
      setMarkdownSource(readmeContent);
      return;
    }

    const rawUrl = convertUrlToRaw(pluginData!.url);
    if (rawUrl) {
      fetch(rawUrl)
        .then((response) => response.text())
        .then((data) => {
          setMarkdownSource(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [pluginData, readmeContent, setMarkdownSource]);

  return (
    <section className={`${style.root} w-full`}>
      {reactContent}
      <ScrollTop />
    </section>
  );
};
