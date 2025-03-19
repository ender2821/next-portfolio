"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ServiceCategory } from "@/__sanity-generated__/types";
import { PortableText } from "next-sanity";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black-decoration last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={
          "flex w-full items-center justify-between py-4 px-4 text-left font-medium transition-all active:bg-gray-50 dark:active:bg-gray-800 touch-manipulation"
        }
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg">{title}</span>
        <ChevronDown
          className={`${isOpen && "rotate-180"} h-5 w-5 text-blue transition-transform duration-200`}
        />
      </button>
      <div
        className={`${isOpen ? "max-h-96" : "max-h-0"} overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 pt-0 text-sm md:text-base">{children}</div>
      </div>
    </div>
  );
};

interface MobileAccordionProps {
  items: ServiceCategory[];
}

export default function MobileAccordion({ items }: MobileAccordionProps) {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.serviceCatergoryTitle ? item.serviceCatergoryTitle : ""}
        >
          {item.serviceCategoryDescription ? (
            <PortableText value={item.serviceCategoryDescription} />
          ) : (
            []
          )}
        </AccordionItem>
      ))}
    </div>
  );
}
