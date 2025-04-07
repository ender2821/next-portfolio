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
    <section className="services-section bg-white relative">
      {i === 0 && (
        <div className="hidden sm:flex sectionMtnLeftWhite absolute left-0 top-0 -translate-y-1/2 z-30" />
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
        {serviceCatergoryTitle ?? ""}
      </h2>
      {categories && <ServiceAccordion items={categories} />}
      <SiteButton href={`/work/?id=${props.id}`} className="service-link">
        View Work
      </SiteButton>
    </section>
  );
}
