"use client";
import Image from "next/image";
import { isEven } from "@/helpers";
import TiltImage from "@/components/TiltImage";
import { PortableText } from "next-sanity";
import { WorkLayout } from "@/__sanity-generated__/types";
import SiteButton from "./SiteButton";

interface WorkPageSectionProps extends WorkLayout {
  i: number;
  buttonUrl: string;
  images: { imageUrl: string | null; imageName: string | null }[];
  mainImage: { imageUrl: string | null; imageName: string | null };
}

export default function WorkPageSection(props: WorkPageSectionProps) {
  const {
    i,
    workLayoutTitle,
    workLayoutContent,
    images,
    mainImage,
    buttonUrl,
  } = props;
  return (
    <section
      className={`sm:pb-8 lg:pb-0 lg:px-8 grid grid-cols-6 gap-4 w-full ${isEven(i) ? "bg-[#fff]" : "bg-black-bg"} relative`}
      key={i}
    >
      {isEven(i) ? (
        <div className="sectionMtnRightWhite absolute right-0 top-0 -translate-y-1/2 z-30" />
      ) : (
        <div className="sectionMtnLeftBlack absolute left-0 top-0 -translate-y-1/2" />
      )}
      <TiltImage
        className={`z-10 col-span-2 ${isEven(i) ? "lg:col-start-1" : "lg:col-start-5"} ${isEven(i) ? "order-0" : "order-2"} -mt-8 z-30 row-start-1`}
        shadow={isEven(i) ? "right" : "left"}
      >
        <Image
          src={mainImage.imageUrl ?? "/default-image.jpg"}
          alt={mainImage?.imageName ?? ""}
          width={900}
          height={1200}
          style={{ objectFit: "contain", width: "100%" }}
        />
      </TiltImage>
      <div
        className={`${isEven(i) ? "text-black-bg" : "text-white"} pt-4 sm:pt-16 lg:pt-[10rem] lg:col-span-3 z-10 ${isEven(i) ? "lg:pl-8" : "lg:pr-8"} ${isEven(i) ? "lg:col-start-3" : "lg:col-start-2"}`}
      >
        {workLayoutTitle ? (
          <h2
            className={`${isEven(i) ? "text-black-bg" : "text-white"} ${isEven(i) ? "text-left" : "text-right"} ${isEven(i) ? "border-white-border" : "border-black-decoration"} text-[3.75rem] leading-[2.5rem] mt-8 sm:mt-0 lg:mb-8`}
          >
            {workLayoutTitle}
          </h2>
        ) : null}
        <div className="grid grid-cols-3 gap-4">
          <PortableText
            value={workLayoutContent ? workLayoutContent : []}
            components={{
              block: {
                normal: ({ children }) => {
                  return (
                    <p
                      className={`${isEven(i) ? "" : workLayoutContent && workLayoutContent.length < 3 && "first-of-type:col-start-2"} ${isEven(i) ? "" : workLayoutContent && workLayoutContent.length === 1 && "first-of-type:col-start-3"}`}
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
        className={`flex items-end ${isEven(i) ? "lg:col-start-6" : "lg:col-start-1"} row-start-1`}
      >
        <div
          className={`flex flex-wrap ${isEven(i) ? "" : "flex-row-reverse"} gap-4 workPageThumbnails relative ${isEven(i) ? "before:bg-white-content-bg" : "before:bg-black-content-bg"} ${isEven(i) ? "before:right-[calc(100%+1rem)]" : "before:left-[calc(100%+1rem)]"}`}
        >
          {images?.map((image: any, j: number) => (
            <div
              key={j}
              className="w-full aspect-square flex items-center overflow-hidden flex-shrink-0 flex-grow-0 flex-[calc(50%-0.5rem)]"
            >
              <Image
                src={image?.imageUrl ?? "/default-image.jpg"}
                alt={image?.imageName ?? ""}
                width={900}
                height={1200}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-6 lg:mt-[3rem] lg:mb-[4rem]">
        <SiteButton
          href={buttonUrl}
          className="mx-auto w-[300px] !block"
          textHover={isEven(i) ? "dark" : "light"}
        >
          Learn More
        </SiteButton>
      </div>
    </section>
  );
}
