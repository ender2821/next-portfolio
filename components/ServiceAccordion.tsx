"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { raleway } from "../app/fonts";

interface AccordionItemProps {
  title: string;
  tags: string[] | null;
  children: React.ReactNode;
}

type ServiceCategoryType = {
  items: {
    serviceCatergoryListTitle: string;
    serviceCatergoryListTags: string[] | null;
    serviceCatergoryListDescriptions: string[] | null;
  }[];
};

const AccordionItem = ({ title, children, tags }: AccordionItemProps) => {
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
        {tags && tags.length > 0 && (
          <ul className="flex gap-2 text-sm font-normal text-blue">
            {tags.map((tag, index) => (
              <li key={index} className="list-disc list-inside">
                {tag}
              </li>
            ))}
          </ul>
        )}
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

export default function ServiceAccordion({ items }: ServiceCategoryType) {
  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={
            item.serviceCatergoryListTitle ? item.serviceCatergoryListTitle : ""
          }
          tags={item.serviceCatergoryListTags}
        >
          {item.serviceCatergoryListDescriptions ? (
            <ul>
              {item.serviceCatergoryListDescriptions.map((desc, j) => (
                <li key={j} className="text-black-bg">
                  {desc}
                </li>
              ))}
            </ul>
          ) : (
            []
          )}
        </AccordionItem>
      ))}
    </div>
  );
}
