import PageBanner from "@/components/PageBanner";
import { WORK_PAGE_QUERY } from "@/queries/workQueries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: workPage } = await sanityFetch({
    query: WORK_PAGE_QUERY,
    params: { slug },
  });
  console.log(workPage);
  return (
    <main>
      <PageBanner
        title={workPage?.name ?? ""}
        subtitle={workPage?.secondaryTitle ?? ""}
        imageUrl={workPage?.workPageMainGallery?.imageUrl ?? ""}
        imageName={workPage?.workPageMainGallery?.imageName ?? ""}
      />
    </main>
  );
}
