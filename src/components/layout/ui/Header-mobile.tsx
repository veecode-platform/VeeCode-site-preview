"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { NavigationLink } from "@/components/ui/links";
import VeeCodeLogo from "@/components/VeeCodeLogo";

const MenuMobile = () => {
  const [open, setOpen] = React.useState(false);
  const t = useTranslations("header");

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="xl:hidden p-2.5 cursor-pointer hover:text-color-primary"
      >
        <RxHamburgerMenu size={30} />
      </button>

      {open && (
        <div
          className={clsx(
            "fixed top-0 left-0 z-[9999] transition-all duration-3500 ease-in w-full h-full bg-neutral-800 md:w-[70%]",
            open
              ? "ml-0 translate-x-0"
              : "ml-[-100vw]-translate-x-full pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-start justify-start gap-8 my-15 text-xl">
            <NavigationLink href="/" onClick={toggleMenu}>
              <VeeCodeLogo />
            </NavigationLink>
            <NavigationLink
              href="/product"
              onClick={toggleMenu}
              className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)] p-4 hover:bg-neutral-700"
            >
              {t("product")}
            </NavigationLink>
            <NavigationLink
              href="/solutions"
              onClick={toggleMenu}
              className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)] p-4 hover:bg-neutral-700"
            >
              {t("solutions")}
            </NavigationLink>
            <NavigationLink
              href="/resources"
              onClick={toggleMenu}
              className="text-neutral-50 self-stretch gap-2.5 whitespace-nowrap my-auto hover:text-[rgba(51,255,205,1)] p-4 hover:bg-neutral-700"
            >
              {t("resources")}
            </NavigationLink>
            <NavigationLink
              href="/comparison"
              onClick={toggleMenu}
              className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)] p-4 hover:bg-neutral-700"
            >
              {t("comparison")}
            </NavigationLink>
            <NavigationLink
              href="/pricing"
              onClick={toggleMenu}
              className="text-neutral-50 self-stretch my-auto hover:text-[rgba(51,255,205,1)] p-4 hover:bg-neutral-700"
            >
              {t("pricing")}
            </NavigationLink>
            <div className="p-4 relative inline-flex items-center">
              <Button
                aria-label={t("demo")}
                variant="secondary"
                size="default"
                disabled
                className="opacity-60 cursor-not-allowed"
              >
                {t("demo")}
              </Button>
              <span className="absolute -top-1 -right-1 bg-[rgba(51,255,205,1)] text-neutral-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                Soon
              </span>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default MenuMobile;
