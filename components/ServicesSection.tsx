import Image from "next/image";
import { ServiceCategory, Slug } from "@/__sanity-generated__/types";
import SiteButton from "@/components/SiteButton";
import ServiceAccordion from "./ServiceAccordion";

interface ServicesSectionProps extends ServiceCategory {
  image: { imageUrl: string | null; imageName: string | null };
  id: string | Slug;
  i: number;
  categories: {
    serviceCatergoryListTitle: string;
    serviceCatergoryListTags: string[] | null;
    serviceCatergoryListDescriptions: string[] | null;
  }[];
}

export default function ServicesSection(props: ServicesSectionProps) {
  const { serviceCatergoryTitle, image, categories, i } = props;

  return (
    <section
      className={`${i === 0 ? "pt-16 lg:pt-0" : ""} services-section bg-white relative grid grid-cols-6 gap-x-4 sm:pb-0 px-4 md:px-8`}
    >
      {i === 0 && (
        <div className="hidden sm:flex sectionMtnLeftWhite absolute left-0 top-0 -translate-y-1/2 z-30" />
      )}
      <div className="lg:h-[10rem] lg:grid lg:grid-cols-6 lg:gap-x-4 col-span-6">
        <div className="lg:border-l lg:border-l-white-border lg:col-start-3 lg:col-span-4" />
      </div>
      <div className="col-span-6 lg:grid lg:grid-cols-6 lg:gap-x-4 border-t-white-border border-b-white-border border-t border-b">
        <h2 className="mb-0 lg:border-l-white-border lg:border-l lg:col-span-4 lg:col-start-3 text-[3rem] before:hidden after:hidden text-black-bg leading-[2rem] lg:text-[3.75rem] lg:leading-[2.55rem]">
          {serviceCatergoryTitle ?? ""}
        </h2>
      </div>
      <div className="relative col-span-6 py-8 md:pr-8 lg:py-0 lg:pr-0 md:mb-8 md:col-span-2 items-center justify-center flex">
        <div className="w-[300px]">
          <Image
            src={image?.imageUrl ?? ""}
            alt={image?.imageName ?? ""}
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="col-span-6 md:col-span-4 md:pt-4 md:border-l-white-border md:border-l">
        {categories && <ServiceAccordion items={categories} />}
        <SiteButton
          href={`/work/?id=${props.id}`}
          className="service-link mt-8 mb-8 w-[300px] relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 md:w-auto"
        >
          View Work
        </SiteButton>
      </div>
    </section>
  );
}
