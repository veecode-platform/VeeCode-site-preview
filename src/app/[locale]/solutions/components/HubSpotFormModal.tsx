"use client";

import { Button } from "@/components/ui/Button";
import React, { useState, useEffect, useRef, useCallback } from "react";

interface HubSpotFormModalProps {
  portalId: string;
  formId: string;
  region: string;
  buttonLabel: string;
}

const CONTAINER_ID = "hubspot-modal-form-container";

const HubSpotFormModal: React.FC<HubSpotFormModalProps> = ({
  portalId,
  formId,
  region,
  buttonLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  const closeModal = useCallback(() => {
    setIsOpen(false);
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

    const container = formContainerRef.current;
    container.innerHTML = "";

    const createForm = () => {
      if (window.hbspt && container) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
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
  }, [isOpen, portalId, formId, region]);

  return (
    <>
      <Button
        variant="default"
        size="sm"
        aria-label={buttonLabel}
        onClick={() => setIsOpen(true)}
      >
        {buttonLabel}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white rounded-xl shadow-2xl w-[90vw] max-w-[600px] max-h-[90vh] overflow-y-auto p-8">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
              aria-label="Close form"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div id={CONTAINER_ID} ref={formContainerRef} />
          </div>
        </div>
      )}
    </>
  );
};

export default HubSpotFormModal;
