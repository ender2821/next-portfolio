"use client";

import { ServiceCategory } from "@/__sanity-generated__/types";
import { useMediaQuery, useTheme } from "@mui/material";
import { PortableText } from "next-sanity";

interface HomeServicesProps {
  categories: ServiceCategory[];
}

export default function HomeServices({ categories }: HomeServicesProps) {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {lg ? (
        <div className="col-span-6">
          {categories.map((category: ServiceCategory, i) => (
            <div key={i} className="">
              <h3>{category.serviceCatergoryTitle}</h3>
              {category?.serviceCategoryDescription && (
                <PortableText value={category.serviceCategoryDescription} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
