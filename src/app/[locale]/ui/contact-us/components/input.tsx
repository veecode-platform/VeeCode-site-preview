/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Field } from "formik";
import { useTranslations } from "next-intl";

interface InputProps {
  name: string;
  placeholder: string;
  label: string;
  error?: string | false | undefined;
}

interface CheckboxProps {
  name: string;
  error?: string | false | undefined;
  terms?: boolean;
  children?: React.ReactNode;
}

interface TextAreaProps {
  name: string;
  placeholder: string;
  error?: string | false | undefined;
  label: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  label,
  error,
}) => {
  return (
    <Field name={name}>
      {({ field }: { field: any }) => (
        <div className="flex flex-col justify-between h-[72px] w-full">
          <div className="flex justify-between text-xs font-medium text-neutral-100">
            <label
              htmlFor={name}
              className={error ? "text-red-700" : "text-neutral-700"}
            >
              {label}
            </label>
            <label
              htmlFor={name}
              className={
                error
                  ? "text-red-700 text-right"
                  : "text-neutral-700 text-right"
              }
            >
              {error}
            </label>
          </div>
          <input
            {...field}
            id={name}
            name={name}
            placeholder={placeholder}
            className={`w-full h-12 px-2 py-1 text-base rounded border ${
              error ? "border-red-700" : "border-[#33FFCE]"
            } bg-[#f3f3f3] placeholder:text-sm focus:border-[#33FFCE] focus:ring-2 focus:ring-[#33FFCE]/30 focus:outline-none focus:text-lg autofill:shadow-inner transition-all duration-300`}
          />
        </div>
      )}
    </Field>
  );
};

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  error,
  children,
  terms,
}) => {
  const t = useTranslations("contactUs.form.terms");

  const termsData = (
    <>
      {t("checkbox1.label")}
      <a
        className="underline hover:opacity-90 ml-1"
        target="_blank"
        href="/terms-of-service"
      >
        {t("checkbox1.linkLabel")}
      </a>{" "}
      {t("checkbox2.label")}
      <a
        className="underline hover:opacity-90 ml-1"
        target="_blank"
        href="/privacy-policy"
      >
        {t("checkbox2.linkLabel")}
      </a>
    </>
  );

  return (
    <Field name={name}>
      {({ field }: { field: any }) => (
        <div
          className={`flex items-center justify-start gap-2 ${
            children ? "w-[49%] h-8" : "w-auto h-[60px]"
          }`}
        >
          <input
            {...field}
            id={name}
            name={name}
            type="checkbox"
            className="w-[0.9vw] h-[0.9vw] accent-[#33FFCE] cursor-pointer max-w-[16px] max-h-[16px] sm:w-[4vw] sm:h-[4vw]"
          />
          <label
            htmlFor={name}
            className={`text-sm max-w-full ${
              children ? "text-gray-500" : "text-inherit"
            } ${error ? "text-red-700" : ""}`}
          >
            {children && <strong>{children}</strong>}
            {terms && termsData}
          </label>
        </div>
      )}
    </Field>
  );
};

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  error,
  label,
}) => {
  return (
    <Field name={name} type="textarea">
      {({ field }: { field: any }) => (
        <div className="flex flex-col justify-between w-full gap-2 min-h-[15vh]">
          <div className="flex justify-between text-xs font-medium text-neutral-100">
            <label
              htmlFor={name}
              className={error ? "text-red-700" : "text-neutral-700"}
            >
              {label}
            </label>
            <label
              htmlFor={name}
              className={
                error
                  ? "text-red-700 text-right"
                  : "text-neutral-700 text-right"
              }
            >
              {error}
            </label>
          </div>
          <textarea
            {...field}
            id={name}
            name={name}
            placeholder={placeholder}
            className={`w-full min-h-[15vh] p-2 text-base font-sans rounded resize-y border ${
              error ? "border-red-700" : "border-[#33FFCE]"
            } bg-[#f3f3f3] focus:ring-2 focus:ring-[#33FFCE]/30 focus:outline-none transition-all duration-300`}
          />
        </div>
      )}
    </Field>
  );
};
