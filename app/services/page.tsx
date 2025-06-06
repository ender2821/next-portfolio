import { sanityFetch } from "@/sanity/lib/live";
import { SERVICES_QUERY } from "@/queries/servicesQueries";
import PageBanner from "@/components/PageBanner";
import SecondaryCallToAction from "@/components/SecondaryCallToAction";
import ServicesSection from "@/components/ServicesSection";
import ServicesIcon from "@/public/assets/servicesIcon.svg";

import {
  SERVICES_QUERYResult,
  ServiceCategoryList,
} from "@/__sanity-generated__/types";

export default async function Services() {
  const { data }: { data: SERVICES_QUERYResult } = await sanityFetch({
    query: SERVICES_QUERY,
    params: {},
  });

  return (
    <main>
      <PageBanner
        title="Services"
        subtitle={data?.servicesHeroSubtitle ?? ""}
        imageUrl={data?.servicesHeroImage?.imageUrl ?? ""}
        imageName={data?.servicesHeroImage?.imageName ?? ""}
        pageIcon={<ServicesIcon />}
      />
      {data?.servicesServiceList?.map((service, i) => (
        <ServicesSection
          key={i}
          i={i}
          _id={""}
          _type={"serviceCategory"}
          _createdAt={""}
          _updatedAt={""}
          _rev={""}
          serviceCatergoryTitle={service?.serviceCatergoryTitle ?? ""}
          image={
            service?.serviceCategoryImage ?? { imageUrl: "", imageName: "" }
          }
          id={service?.serviceCatergoryId?.current ?? ""}
          categories={
            service?.serviceCategories?.map((category) => ({
              ...category,
              serviceCatergoryListTitle:
                category.serviceCatergoryListTitle ?? "",
            })) ?? []
          }
        />
      ))}
      <SecondaryCallToAction />
    </main>
  );
}
