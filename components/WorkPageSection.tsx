"use client";
import Image from "next/image";
import { isEven } from "@/helpers";
import { PortableText } from "next-sanity";
import { WorkLayout } from "@/__sanity-generated__/types";
import { useMediaQuery, useTheme } from "@mui/material";
import TiltImage from "./TiltImage";

interface WorkPageSectionProps extends WorkLayout {
  i: number;
  images: { imageUrl: string | null; imageName: string | null }[];
}

export default function WorkPageSection(props: WorkPageSectionProps) {
  const { i, workLayoutTitle, workLayoutContent, workLayoutSubtitle, images } =
    props;
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <section
      className={`bg-[#fff] px-4 md:px-8 lg:px-8 grid grid-cols-6 gap-4 w-full relative lg:pb-16`}
    >
      {i === 0 && (
        <div className="sectionMtnRightWhite absolute right-0 top-0 -translate-y-1/2 z-30" />
      )}
      {i !== 0 && workLayoutTitle ? (
        <h2
          className={`${isEven(i) ? "text-right" : "text-left"} text-[3rem] text-black-bg leading-[2.5rem] lg:text-[3.75rem] lg:leading-[3rem] mt-4 sm:mt-0 lg:mb-4 col-span-6 md:col-span-4 md:col-start-2`}
        >
          {workLayoutTitle}
        </h2>
      ) : null}

      <div
        className={`${isEven(i) ? "sm:col-start-4 sm:pl-4" : "sm:col-start-2"} sm:col-span-2 z-10`}
      >
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-4 text-black-bg">
          {i === 0 && workLayoutTitle ? (
            <h2
              className={`${isEven(i) ? "text-right" : "text-left"} ${i === 0 && "!text-left"} text-[3rem] text-black-bg leading-[2.5rem] lg:text-[3.75rem] lg:leading-[3rem] mt-4 sm:mt-0 lg:mb-4 lg:mt-[10rem] col-span-6 md:col-span-2`}
            >
              {workLayoutTitle}
            </h2>
          ) : null}
          {workLayoutSubtitle ? (
            <h3
              className={`text-left text-[1.5rem] text-secondary-title leading-[1.75rem] lg:text-[1.5rem] lg:leading-[2rem] mb-0 col-span-6 md:col-span-2`}
            >
              {workLayoutSubtitle}
            </h3>
          ) : null}
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
        className={`${isEven(i) ? "lg:col-start-2" : "lg:col-start-4"} ${i === 0 && "lg:row-start-1 lg:-mt-8 z-30"} ${i === 0 ? "flex-col items-start" : "items-end"} lg:flex flex-wrap flex-row-reverse md:col-span-2 row-start-2 gap-4`}
      >
        {images?.map((image: any, j: number) => (
          <div
            key={j}
            className={`${images.length > 1 && "flex-[calc(50%-0.5rem)] flex-shrink-0 flex-grow-0 "} relative`}
          >
            {i === 0 ? (
              <TiltImage className={"z-10"} shadow={"right"}>
                <Image
                  src={image.imageUrl ?? "/default-image.jpg"}
                  alt={image.imageName ?? "default image description"}
                  width={900}
                  height={1200}
                  key={j}
                  className="block"
                />
              </TiltImage>
            ) : (
              <Image
                src={image.imageUrl ?? "/default-image.jpg"}
                alt={image.imageName ?? "default image description"}
                width={900}
                height={1200}
                key={j}
                className="block"
              />
            )}
          </div>
        ))}
      </div>
      <div
        className={`${isEven(i) ? "lg:col-start-1" : "lg:col-start-6"} ${i === 0 ? "md:mt-8 row-start-1" : "row-start-2"} flex flex-wrap items-end`}
      >
        <div className="w-full">
          <div>
            {images?.map((image: any, j: number) => (
              <span
                key={j}
                className="text-white-decoration break-words mb-4 block text-xs last-of-type:mb-0"
              >
                {image?.imageUrl}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
