"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { raleway } from "../app/(app)/fonts";

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
    <div className="border-b-white-decoration border-b">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`text-black-decoration font-bold flex-wrap flex w-full items-center py-2 pr-4 text-left transition-all touch-manipulation relative`}
        aria-expanded={isOpen}
      >
        <h3 className="text-[1.5rem] w-[calc(100%-2rem)] md:w-full lg:w-auto normal-case text-black-bg m-0">
          {title}
        </h3>
        {tags && tags.length > 0 && (
          <ul className="flex flex-wrap gap-4 text-sm font-normal mt-1 lg:mt-0 lg:ml-4">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-xl text-black-bg border-blue border px-4 font-normal "
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        <ChevronDown
          className={`${isOpen && "rotate-180"} h-5 w-5 mr-2 md:mr-0 text-black-bg transition-transform duration-200 -order-1 md:-order-none md:absolute -left-8 top-[0.8rem]`}
        />
      </button>
      <div
        className={`${isOpen ? "max-h-96" : "max-h-0"} overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="pb-4 text-sm md:text-base">{children}</div>
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
            <ul className="list-disc pl-8">
              {item.serviceCatergoryListDescriptions.map((desc, j) => (
                <li key={j} className=" text-black-bg">
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
