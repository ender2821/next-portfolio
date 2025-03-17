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
          <div key={i} className="group ">
            <h3
              className={`${raleway.className} font-bold text-black-decoration text-right uppercase text-[5rem] group-hover:text-[3.85rem] transition-all`}
            >
              {category.serviceCatergoryTitle}
            </h3>
            {category?.serviceCategoryDescription && (
              <div>
                <PortableText value={category.serviceCategoryDescription} />
              </div>
            )}
          </div>
        ))}
      </div>
      <></>
    </>
  );
}
