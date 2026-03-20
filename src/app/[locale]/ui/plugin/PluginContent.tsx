/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Remark } from "react-remark";
import rehypeHighlight from "rehype-highlight";
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
  const label = children.join(" ");
  return <a href={href}>{label}</a>;
};

function sanitizeMarkdown(md: string): string {
  // Escape ${{ }} template expressions that break react-remark
  return md.replace(/\$\{\{/g, "\\${{");
}

export const PluginContent: React.FC<PluginContentProps> = ({
  pluginData,
  readmeContent,
}) => {
  const [content, setContent] = React.useState(
    readmeContent ? sanitizeMarkdown(readmeContent) : ""
  );

  React.useEffect(() => {
    if (readmeContent) return;

    const rawUrl = convertUrlToRaw(pluginData!.url);
    if (rawUrl) {
      fetch(rawUrl)
        .then((response) => response.text())
        .then((data) => {
          setContent(sanitizeMarkdown(data));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [pluginData, readmeContent]);

  return (
    <section className={`${style.root} w-full`}>
      <Remark
        remarkPlugins={[remarkGemoji] as any}
        remarkToRehypeOptions={{ allowDangerousHtml: true }}
        rehypePlugins={[rehypeSlug, rehypeHighlight] as any}
        rehypeReactOptions={{
          components: {
            a: (props: any) => <LinkTag {...props} />,
          },
        }}
      >
        {content}
      </Remark>
      <ScrollTop />
    </section>
  );
};
