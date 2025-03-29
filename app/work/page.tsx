import Image from "next/image";
import Link from "next/link";

import { raleway } from "../fonts";
import { sanityFetch } from "@/sanity/lib/live";
import { WORK_QUERY } from "@/queries/workQueries";
import WorkPageSection from "@/components/WorkPageSection";

export default async function Home() {
  const { data: work } = await sanityFetch({ query: WORK_QUERY, params: {} });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="h-[300px] lg:h-[400px] overflow-hidden w-full relative background">
        <div className="h-[300px] lg:h-[400px] w-full bg-black-bg opacity-80 z-20 absolute top-0 left-0"></div>
        {work?.heroImage?.imageUrl ? (
          <div
            className="hidden lg:block h-[5.375rem] w-full absolute top-[3rem] z-10 overflow-hidden"
            style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
          >
            <Image
              src={work.heroImage.imageUrl}
              alt={work.heroImage.imageName || "Hero Image"}
              width={900}
              height={1200}
              className="absolute w-full object-cover sm:object-contain top-1/2 -translate-y-[42%] scaling-image-down"
            />
          </div>
        ) : null}

        {work?.heroImage?.imageUrl ? (
          <Image
            src={work.heroImage.imageUrl}
            alt={work.heroImage.imageName || "Hero Image"}
            width={900}
            height={1200}
            className="absolute w-full object-contain top-1/2 -translate-y-1/2 scaling-image-up"
          />
        ) : null}
        <h1
          className={`${raleway.className} mt-[3rem] ml-4 md:ml-8 z-30 relative text-white uppercase w-full block font-bold text-[3.125rem] leading-[2.2rem] lg:text-[7.5rem] lg:leading-[5.25rem]`}
        >
          Work
        </h1>
        {work?.heroSubtitle && (
          <p className="z-30 relative text-[1.2rem] lg:text-[1.5rem] lg:leading-[2rem] pl-4 md:pl-8 pt-4 lg:pt-8">
            {work?.heroSubtitle}
          </p>
        )}
      </section>
      {work?.workPages?.map((workPage, i) => {
        return (
          <WorkPageSection
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
