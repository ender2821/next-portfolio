"use client";
import Image from "next/image";
import { isEven } from "@/helpers";
import { PortableText } from "next-sanity";
import { WorkLayout } from "@/__sanity-generated__/types";
import { useMediaQuery, useTheme } from "@mui/material";

interface WorkPageSectionProps extends WorkLayout {
  i: number;
  images: { imageUrl: string | null; imageName: string | null }[];
}

export default function WorkPageSection(props: WorkPageSectionProps) {
  const { i, workLayoutTitle, workLayoutContent, images } = props;
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <section
      className={`bg-[#fff] sm:pb-0 px-4 md:px-8 lg:pb-0 lg:px-8 grid grid-cols-6 gap-4 w-full relative`}
    >
      {i === 0 && (
        <div className="sectionMtnRightWhite absolute right-0 top-0 -translate-y-1/2 z-30" />
      )}
      {workLayoutTitle ? (
        <h2
          className={`${isEven(i) ? "text-right" : "text-left"} text-[3rem] text-black-bg leading-[2.5rem] lg:text-[3.75rem] lg:leading-[3rem] mt-4 sm:mt-0 lg:mb-8 col-span-6 md:col-span-4 md:col-start-2`}
        >
          {workLayoutTitle}
        </h2>
      ) : null}
      <div
        className={`${isEven(i) ? "sm:col-start-4" : "sm:col-start-2"} sm:pl-4 sm:col-span-2 z-10`}
      >
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-4 text-black-bg">
          <PortableText
            value={workLayoutContent ? workLayoutContent : []}
            components={{
              block: {
                normal: ({ children }) => {
                  return (
                    <p
                      className={`${isEven(i) ? "" : workLayoutContent && workLayoutContent.length < 3 && "xl:first-of-type:col-start-1"} ${isEven(i) ? "" : workLayoutContent && workLayoutContent.length === 1 && "xl:first-of-type:col-start-3"} last-of-type:mb-0`}
                    >
                      {children}
                    </p>
                  );
                },
              },
            }}
          />
        </div>
      </div>
      <div
        className={`lg:flex items-end ${isEven(i) ? "lg:col-start-2" : "lg:col-start-4"} md:col-span-2 row-start-2`}
      >
        <div className={``}>
          {images?.map((image: any, j: number) => (
            <Image
              src={image.imageUrl ?? "/default-image.jpg"}
              alt={image.imageName ?? "default image description"}
              width={900}
              height={1200}
              key={j}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
