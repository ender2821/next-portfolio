import Image from "next/image";
import Link from "next/link";

import { raleway } from "../fonts";
import { sanityFetch } from "@/sanity/lib/live";
import { WORK_QUERY } from "@/queries/workQueries";

export default async function Home() {
  const { data: work } = await sanityFetch({ query: WORK_QUERY, params: {} });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="h-[400px] px-4 pb-8 pt-4 lg:pt-8 sm:pb-0 lg:p-8 lg:pb-0 relative grid grid-cols-6 gap-4 w-full overflow-hidden">
        {work?.heroImage?.imageUrl ? (
          <Image
            src={work.heroImage.imageUrl}
            alt={work.heroImage.imageName || "Hero Image"}
            width={900}
            height={1200}
            className="absolute w-full object-contain -top-1/2"
          />
        ) : null}
        <h1 className="z-10">Work</h1>
      </section>
    </main>
  );
}
