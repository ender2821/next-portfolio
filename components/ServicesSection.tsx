import Image from "next/image";
import {
  ServiceCategory,
  ServiceCategoryList,
  Slug,
} from "@/__sanity-generated__/types";
import SiteButton from "@/components/SiteButton";
import { serviceCategoryList } from "@/sanity/schemas/serviceCategoryList";
import { PortableText } from "@portabletext/react";

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
  const { serviceCatergoryTitle, image, categories } = props;
  return (
    <section className="services-section">
      <div className="w-[300px] h-[300px] relative mb-8">
        <Image
          src={image?.imageUrl ?? ""}
          alt={image?.imageName ?? ""}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-3xl font-bold">{serviceCatergoryTitle}</h2>
      {categories &&
        categories.map((category, i) => (
          <div key={i}>
            <h3>{category?.serviceCatergoryListTitle}</h3>
            <ul>
              {category?.serviceCatergoryListTags?.map((tag, j) => (
                <li key={j}>{tag}</li>
              ))}
            </ul>
            <ul>
              {category?.serviceCatergoryListDescriptions?.map((desc, k) => (
                <li key={k}>{desc}</li>
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
