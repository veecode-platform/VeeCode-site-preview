"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

const PORTAL_ID = "48576194";
const FORM_ID = "fc26de6f-8d62-4328-8814-675a29ce0d4c";
const REGION = "na1";
const CONTAINER_ID = "hubspot-pricing-form-container";

interface HubSpotPopupButtonProps {
  buttonText: string;
}

export default function HubSpotPopupButton({
  buttonText,
}: HubSpotPopupButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (!isOpen || !formContainerRef.current) return;

    formContainerRef.current.innerHTML = "";

    const createForm = () => {
      if (window.hbspt && formContainerRef.current) {
        window.hbspt.forms.create({
          portalId: PORTAL_ID,
          formId: FORM_ID,
          region: REGION,
          target: `#${CONTAINER_ID}`,
        });
      }
    };

    if (window.hbspt) {
      createForm();
      return;
    }

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = createForm;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [isOpen]);

  const modal = isOpen ? (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Formulário de cadastro gratuito"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Fechar formulário"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-8 pt-12">
          <div id={CONTAINER_ID} ref={formContainerRef} />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-4 bg-transparent border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-base hover:border-[#33FFCE] hover:bg-[rgba(51,255,206,0.1)] transition-all"
      >
        {buttonText}
      </button>

      {mounted && createPortal(modal, document.body)}
    </>
  );
}
