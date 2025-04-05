"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ServiceCategory } from "@/__sanity-generated__/types";
import { PortableText } from "next-sanity";
import { raleway } from "../app/fonts";

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
        className={`${raleway.className} uppercase text-black-decoration font-bold  flex w-full items-center justify-between py-4 pr-4 text-left transition-all touch-manipulation`}
        aria-expanded={isOpen}
      >
        <span className="text-[1.875rem]">{title}</span>
        <ChevronDown
          className={`${isOpen && "rotate-180"} h-5 w-5 text-blue transition-transform duration-200`}
        />
      </button>
      <div
        className={`${isOpen ? "max-h-96" : "max-h-0"} overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="pt-4 pb-4 text-sm md:text-base">{children}</div>
      </div>
    </div>
  );
};

export default function ServiceAccordion({ items }) {
  return (
    <div>
      {items.map((item: string, index: number) => (
        <AccordionItem
          key={index}
          title={item.serviceCatergoryTitle ? item.serviceCatergoryTitle : ""}
        >
          {item.serviceCategoryDescription ? (
            <li>{item.serviceCategoryDescription}</li>
          ) : (
            []
          )}
        </AccordionItem>
      ))}
    </div>
  );
}
