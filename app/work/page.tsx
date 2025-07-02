import Image from "next/image";
import Link from "next/link";

import { raleway } from "../fonts";
import { sanityFetch } from "@/sanity/lib/live";
import { WORK_QUERY } from "@/queries/workLandingQuery";
import WorkLandingPageSection from "@/components/WorkLandingPageSection";
import PageBanner from "@/components/PageBanner";
import WorkIcon from "@/public/assets/workIcon.svg";
import { WORK_QUERYResult } from "@/__sanity-generated__/types";
import { useSearchParams } from "next/navigation";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function WorkLandingPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const { data: work }: { data: WORK_QUERYResult } = await sanityFetch({
    query: WORK_QUERY,
  });

  const recievedSearchParams = await searchParams;

  const filteredWorkPages = recievedSearchParams?.id
    ? work?.workPages?.filter((workPage) => {
        if (workPage?.workPageServiceCategory?.id) {
          return workPage?.workPageServiceCategory.id.includes(
            typeof recievedSearchParams.id === "string"
              ? recievedSearchParams.id
              : ""
          );
        }
      })
    : work?.workPages;

  return (
    <main className="flex min-h-screen flex-col items-center">
      <PageBanner
        title="Work"
        subtitle={work?.heroSubtitle ?? ""}
        imageUrl={work?.heroImage?.imageUrl ?? ""}
        imageName={work?.heroImage?.imageName ?? ""}
        pageIcon={<WorkIcon />}
      />
      {(filteredWorkPages ?? []).map((workPage, i) => {
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
