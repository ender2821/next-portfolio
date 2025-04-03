import Image from "next/image";
import {
  ServiceCategory,
  ServiceCategoryList,
  Slug,
} from "@/__sanity-generated__/types";
import SiteButton from "@/components/SiteButton";

interface ServicesSectionProps extends ServiceCategory {
  image: { imageUrl: string | null; imageName: string | null };
  id: string | Slug;
  categories: {
    serviceCatergoryListTitle: string | null;
    serviceCatergoryListTags: string[] | null;
    serviceCatergoryListDescriptions: string[] | null;
  }[];
}

export default function ServicesSection(props: ServicesSectionProps) {
  const { serviceCatergoryTitle, image } = props;
  return (
    <section className="services-section">
      <Image
        src={image?.imageUrl ?? ""}
        alt={image?.imageName ?? ""}
        width={500}
        height={500}
        className="object-cover w-full h-full"
      />
      {serviceCatergoryTitle && <h2>{serviceCatergoryTitle}</h2>}
      <SiteButton href={`/work/?id=${props.id}`} className="service-link">
        View Work
      </SiteButton>
    </section>
  );
}
