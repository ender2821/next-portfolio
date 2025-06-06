import { WORK_PAGE_QUERYResult } from "@/__sanity-generated__/types";
import PageBanner from "@/components/PageBanner";
import WorkPageSection from "@/components/WorkPageSection";
import { WORK_PAGE_QUERY } from "@/queries/workQueries";
import { sanityFetch } from "@/sanity/lib/live";
import SecondaryCallToAction from "@/components/SecondaryCallToAction";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data }: { data: WORK_PAGE_QUERYResult } = await sanityFetch({
    query: WORK_PAGE_QUERY,
    params: { slug },
  });
  const workPage = data;

  return (
    <main>
      <PageBanner
        title={workPage?.name ?? ""}
        subtitle={workPage?.secondaryTitle ?? ""}
        imageUrl={workPage?.workPageMainGallery?.imageUrl ?? ""}
        imageName={workPage?.workPageMainGallery?.imageName ?? ""}
        backButton={true}
      />
      {workPage?.workPageLayout?.map((section, i) => {
        return (
          <WorkPageSection
            key={i}
            workLayoutTitle={section?.workLayoutTitle ?? ""}
            workLayoutSubtitle={section?.workLayoutSubtitle ?? ""}
            workLayoutContent={section?.workLayoutContent || []}
            images={section?.workLayoutGallery ?? []}
            i={i}
            _type={"workLayout"}
          />
        );
      })}
      <SecondaryCallToAction />
    </main>
  );
}
