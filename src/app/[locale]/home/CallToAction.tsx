"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useTranslations } from "next-intl";

const CallToAction: React.FC = () => {
  const t = useTranslations("home.call-to-action.early-access");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const source = process.env.NEXT_PUBLIC_SITE_ENV || "prod";

    const { error: insertError } = await supabase
      .from("email_signups")
      .insert({ email, source });

    setLoading(false);

    if (insertError) {
      if (insertError.code === "23505") {
        setSubmitted(true);
      } else {
        setError(t("error"));
      }
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#33FFCE] text-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mx-auto mb-8 text-center">
          <span className="inline-block bg-black/10 px-6 py-3 rounded-full text-xl font-bold">
            {t("badge")}
          </span>
        </div>

        <h2 className="text-5xl font-bold text-center mb-6">
          {t("title")}
        </h2>

        <p className="text-xl text-center mb-16 text-gray-800">
          {t("subtitle")}
        </p>

        <div className="bg-white text-gray-900 rounded-2xl p-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">
            {t("box-title")}
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-lg">
              <span className="text-green-600 shrink-0">✅</span>
              {t("benefit1")}
            </li>
            <li className="flex items-start gap-3 text-lg">
              <span className="text-green-600 shrink-0">✅</span>
              {t("benefit2")}
            </li>
            <li className="flex items-start gap-3 text-lg">
              <span className="text-green-600 shrink-0">✅</span>
              {t("benefit3")}
            </li>
            <li className="flex items-start gap-3 text-lg">
              <span className="text-green-600 shrink-0">✅</span>
              {t("benefit4")}
            </li>
          </ul>

          <hr className="my-8 border-gray-200" />

          {submitted ? (
            <p className="text-center text-lg font-semibold text-green-700">
              {t("success")}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="email"
                required
                placeholder={t("placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
              />
              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-[#33FFCE] text-xl py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors cursor-pointer disabled:opacity-50"
              >
                {loading ? t("loading") : t("submit")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
