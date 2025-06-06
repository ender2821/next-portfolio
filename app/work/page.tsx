import Image from "next/image";
import Link from "next/link";

import { raleway } from "../fonts";
import { sanityFetch } from "@/sanity/lib/live";
import { WORK_QUERY } from "@/queries/workQueries";
import WorkLandingPageSection from "@/components/WorkLandingPageSection";
import PageBanner from "@/components/PageBanner";
import WorkIcon from "@/public/assets/workIcon.svg";

export default async function WorkLandingPage() {
  const { data: work } = await sanityFetch({ query: WORK_QUERY, params: {} });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <PageBanner
        title="Work"
        subtitle={work?.heroSubtitle ?? ""}
        imageUrl={work?.heroImage?.imageUrl ?? ""}
        imageName={work?.heroImage?.imageName ?? ""}
        pageIcon={<WorkIcon />}
      />
      {work?.workPages?.map((workPage, i) => {
        return (
          <WorkLandingPageSection
            key={i}
            workLayoutTitle={workPage?.name ?? undefined}
            workLayoutContent={
              workPage?.workPageLayout?.workLayoutContent || []
            }
            images={workPage?.workPageMainGallery ?? []}
            i={i}
            _type={"workLayout"}
            buttonUrl={`/work/${workPage?.slug?.current}`}
          />
        );
      })}
    </main>
  );
}
