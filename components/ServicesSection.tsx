"use client";

import Image from "next/image";
import { ServiceCategory, Slug } from "@/__sanity-generated__/types";
import SiteButton from "@/components/SiteButton";
import { useMediaQuery, useTheme } from "@mui/material";

interface ServicesSectionProps extends ServiceCategory {
  image: { imageUrl: string | null; imageName: string | null };
  id: string | Slug;
  i: number;
  categories: {
    serviceCatergoryListTitle: string | null;
    serviceCatergoryListTags: string[] | null;
    serviceCatergoryListDescriptions: string[] | null;
  }[];
}

export default function ServicesSection(props: ServicesSectionProps) {
  const { serviceCatergoryTitle, image, categories, i } = props;
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <section
      className="services-section bg-white relative
    "
    >
      {sm && i === 0 && (
        <div className="sectionMtnLeftWhite absolute left-0 top-0 -translate-y-1/2 z-30" />
      )}
      <div className="w-[300px] h-[300px] relative mb-8">
        <Image
          src={image?.imageUrl ?? ""}
          alt={image?.imageName ?? ""}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-[3rem] text-black-bg leading-[2.5rem] lg:text-[3.75rem] lg:leading-[3rem] mt-8 mb-0 sm:mt-0 sm:mb-4 lg:mb-4">
        {serviceCatergoryTitle}
      </h2>
      {categories &&
        categories.map((category, j) => (
          <div key={j} className="text-black-bg">
            <h3>{category?.serviceCatergoryListTitle}</h3>
            <ul>
              {category?.serviceCatergoryListTags?.map((tag, k) => (
                <li key={k}>{tag}</li>
              ))}
            </ul>
            <ul>
              {category?.serviceCatergoryListDescriptions?.map((desc, l) => (
                <li key={l}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      <SiteButton href={`/work/?id=${props.id}`} className="service-link">
        View Work
      </SiteButton>
    </section>
  );
}
