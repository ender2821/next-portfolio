import { sanityFetch } from "@/sanity/lib/live";
import PageBanner from "@/components/PageBanner";
import { CONTACT_QUERYResult } from "@/__sanity-generated__/types";
import { CONTACT_QUERY } from "@/queries/contactQuerries";
import ContactSection from "@/components/ContactSection";
import ContactIcon from "@/public/assets/contactIcon.svg";

export default async function Services() {
  const { data }: { data: CONTACT_QUERYResult } = await sanityFetch({
    query: CONTACT_QUERY,
    params: {},
  });

  return (
    <main>
      <PageBanner
        title="Contact"
        subtitle={data?.contactHeroSubtitle ?? ""}
        imageUrl={data?.contactHeroImage?.imageUrl ?? ""}
        imageName={data?.contactHeroImage?.imageName ?? ""}
        pageIcon={<ContactIcon />}
      />
      <ContactSection
        _id={""}
        _type={"contact"}
        _createdAt={""}
        _updatedAt={""}
        _rev={""}
        contactSectionTitle={data?.contactSectionTitle ?? ""}
        contactSectionSubtitle={data?.contactSectionSubtitle ?? ""}
        image={data?.contactSectionImage ?? { imageUrl: "", imageName: "" }}
      />
    </main>
  );
}
