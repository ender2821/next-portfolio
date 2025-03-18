"use client";

import { ServiceCategory } from "@/__sanity-generated__/types";
import { useMediaQuery, useTheme } from "@mui/material";
import { PortableText } from "next-sanity";

import { raleway } from "../app/fonts";

interface HomeServicesProps {
  categories: ServiceCategory[];
}

export default function HomeServices({ categories }: HomeServicesProps) {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <div className="hidden lg:block col-span-6">
        {categories.map((category: ServiceCategory, i) => (
          <div
            key={i}
            className="group overflow-hidden border-black-decoration border-b pb-8 pt-8 relative"
          >
            <span className="h-[1px] border-t z-10 border-blue border-dashed block absolute top-1/2 w-[calc(50%+1rem)] -left-[calc(50%+1rem)] group-hover:left-0 duration-500 transition-all"></span>
            <div className="flex-nowrap gap-4 group-hover:-left-1/2 left-0 flex transition-all duration-500 relative items-end w-[calc(150%+1rem)]">
              <h3
                className={`${raleway.className} mb-0 leading-[4rem] group-hover:leading-[3rem] block flex-[100%] font-bold text-black-decoration text-right uppercase text-[5rem] group-hover:text-[3.85rem] group-hover:left-0 duration-500 transition-all`}
              >
                {category.serviceCatergoryTitle}
              </h3>
              {category?.serviceCategoryDescription && (
                <div className="flex-[50%] -mb-4">
                  <div className="max-w-[900px] mr-8 border border-dashed border-blue ">
                    <PortableText value={category.serviceCategoryDescription} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <></>
    </>
  );
}
