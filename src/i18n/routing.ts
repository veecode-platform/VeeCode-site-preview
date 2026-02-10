import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt"],
  defaultLocale: "en",
  localeCookie: false,
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/product": "/product",
    "/solutions": "/solutions",
    "/resources": "/resources",
    "/plugin": "/plugin",
    "/plugin/[path]": "/plugin/[path]",
    "/comparison": "/comparison",
    "/how-it-works": "/how-it-works",
    "/support": "/support",
    "/privacy-policy": "/privacy-policy",
    "/terms-of-service": "/terms-of-service",
    "/faq": "/faq",
    "/contact-us": "/contact-us",
    "/contact-success": "/contact-success",
    "/contact-failed": "/contact-failed",
    "/pricing": "/pricing",
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
