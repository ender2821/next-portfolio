import Image from "next/image";
import Link from "next/link";

import { raleway } from "../fonts";
import { sanityFetch } from "@/sanity/lib/live";
import { WORK_QUERY } from "@/queries/workQueries";
import { isEven } from "@/helpers";
import TiltImage from "@/components/TiltImage";
import { PortableText } from "next-sanity";

export default async function Home() {
  const { data: work } = await sanityFetch({ query: WORK_QUERY, params: {} });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="h-[400px] overflow-hidden w-full relative background">
        <div className="h-[400px] w-full bg-black-bg opacity-80 z-20 absolute top-0 left-0"></div>
        {work?.heroImage?.imageUrl ? (
          <div
            className="h-[5.375rem] w-full absolute top-[3rem] z-10 overflow-hidden"
            style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
          >
            <Image
              src={work.heroImage.imageUrl}
              alt={work.heroImage.imageName || "Hero Image"}
              width={900}
              height={1200}
              className="absolute w-full object-contain top-1/2 -translate-y-[42%] scaling-image-down"
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
          className={`${raleway.className} mt-[3rem] ml-8 z-30 relative text-white uppercase w-full block font-bold text-[3.125rem] leading-[2.2rem] lg:text-[7.5rem] lg:leading-[5.25rem]`}
        >
          Work
        </h1>
      </section>
      {work?.workPages?.map((workPage, i) => {
        console.log(workPage?.workPageMainGallery?.[0]?.imageUrl);
        return (
          <section
            className={`sm:pb-8 lg:pb-[8rem] lg:px-8 grid grid-cols-6 gap-4 w-full ${isEven(i) ? "bg-[#fff]" : "bg-black-bg"} relative`}
            key={i}
          >
            {isEven(i) ? (
              <div className="sectionMtnRightWhite absolute right-0 top-0 -translate-y-1/2 z-30" />
            ) : (
              <div className="sectionMtnLeftBlack absolute left-0 top-0 -translate-y-1/2" />
            )}
            <TiltImage
              className={`z-10 col-span-2 ${isEven(i) ? "lg:col-start-1" : "lg:col-start-5"} ${isEven(i) ? "order-0" : "order-2"} -mt-8 z-30`}
              shadow={isEven(i) ? "right" : "left"}
            >
              <Image
                src={
                  workPage?.workPageMainGallery?.[0]?.imageUrl ??
                  "/default-image.jpg"
                }
                alt={workPage?.workPageMainGallery?.[0]?.imageName ?? ""}
                width={900}
                height={1200}
                style={{ objectFit: "contain", width: "100%" }}
              />
            </TiltImage>
            <div
              className={`col-span-4 ${isEven(i) ? "text-black-bg" : "text-white"} pt-4 sm:pt-16 lg:pt-[10rem]`}
            >
              <h2
                className={`${isEven(i) ? "text-black-bg" : "text-white"} ${isEven(i) ? "text-left" : "text-right"} ${isEven(i) ? "border-white-border" : "border-black-decoration"} text-[3.75rem] leading-[2.5rem] mt-8 sm:mt-0 lg:mb-0`}
              >
                {workPage?.name}
              </h2>
              <PortableText
                value={
                  workPage?.workPageLayout?.workLayoutContent
                    ? workPage?.workPageLayout?.workLayoutContent
                    : []
                }
              />
            </div>
          </section>
        );
      })}
    </main>
  );
}
