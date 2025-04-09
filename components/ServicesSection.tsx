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
    <section className="services-section bg-white relative grid grid-cols-6 gap-x-4">
      {i === 0 && (
        <div className="hidden sm:flex sectionMtnLeftWhite absolute left-0 top-0 -translate-y-1/2 z-30" />
      )}
      <div className="lg:h-[10rem] lg:grid lg:grid-cols-6 lg:gap-x-4 col-span-6">
        <div className="lg:border-l lg:border-l-white-border lg:col-start-3 lg:col-span-4" />
      </div>
      <div className="col-span-6 lg:grid lg:grid-cols-6 lg:gap-x-4 border-t-white-border border-b-white-border border-t border-b">
        <h2 className="mb-0 lg:border-l-white-border lg:border-l lg:col-span-4 lg:col-start-3 text-[3rem] before:hidden after:hidden text-black-bg leading-[2.5rem] lg:text-[3.75rem] lg:leading-[2.55rem]">
          {serviceCatergoryTitle ?? ""}
        </h2>
      </div>
      <div className="relative mb-8 col-span-2 items-center justify-center flex">
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
      <div className="col-span-4 border-l-white-border border-l">
        {categories && <ServiceAccordion items={categories} />}
        <SiteButton
          href={`/work/?id=${props.id}`}
          className="service-link lg:mt-8"
        >
          View Work
        </SiteButton>
      </div>
    </section>
  );
}
