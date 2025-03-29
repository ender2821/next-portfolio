"use client";
import Image from "next/image";
import { isEven } from "@/helpers";
import TiltImage from "@/components/TiltImage";
import { PortableText } from "next-sanity";
import { WorkLayout } from "@/__sanity-generated__/types";
import SiteButton from "./SiteButton";
import { forwardRef, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowResize";

interface WorkPageSectionProps extends WorkLayout {
  i: number;
  buttonUrl: string;
  images: { imageUrl: string | null; imageName: string | null }[];
  mainImage: { imageUrl: string | null; imageName: string | null };
}

// type ActiveThumbnail = {
//   index: number;
//   url: string | null;
//   name: string | null;
// }

export default function WorkPageSection(props: WorkPageSectionProps) {
  const {
    i,
    workLayoutTitle,
    workLayoutContent,
    images,
    mainImage,
    buttonUrl,
  } = props;
  const [activeThumbnail, setActiveThumbnail] = useState({
    index: 0,
    url: images[0]?.imageUrl,
    name: images[0]?.imageName,
  });
  const [width, height] = useWindowSize();

  const [imageContainHeight, setImageContainHeight] = useState(0);
  const mainImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (mainImageRef.current) {
      setImageContainHeight(
        mainImageRef.current.getBoundingClientRect().height
      );
    }
  }, [activeThumbnail, width]);

  return (
    <AnimatePresence>
      <section
        className={`sm:pb-8 lg:pb-0 lg:px-8 grid grid-cols-6 gap-4 w-full ${isEven(i) ? "bg-[#fff]" : "bg-black-bg"} relative`}
        key={i}
      >
        {isEven(i) ? (
          <div className="sectionMtnRightWhite absolute right-0 top-0 -translate-y-1/2 z-30" />
        ) : (
          <div className="sectionMtnLeftBlack absolute left-0 top-0 -translate-y-1/2" />
        )}
        <motion.div
          animate={{
            height: imageContainHeight,
          }}
          exit={{ height: 0 }}
          className={`self-center z-10 col-span-2 ${isEven(i) ? "lg:col-start-1" : "lg:col-start-5"} ${isEven(i) ? "order-0" : "order-2"} -mt-8 z-30 row-start-1`}
        >
          <TiltImage className={``} shadow={isEven(i) ? "right" : "left"}>
            <Image
              src={String(activeThumbnail?.url ?? "/default-image.jpg")}
              alt={String(activeThumbnail?.name ?? "")}
              width={900}
              height={1200}
              style={{ objectFit: "contain", width: "100%" }}
              ref={mainImageRef}
            />
          </TiltImage>
        </motion.div>

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
            className={`flex flex-wrap ${isEven(i) ? "" : "flex-row-reverse"} w-full gap-4 workPageThumbnails relative opacity ${isEven(i) ? "before:bg-white-content-bg" : "before:bg-black-content-bg"} ${isEven(i) ? "before:right-[calc(100%+1rem)]" : "before:left-[calc(100%+1rem)]"}`}
          >
            {images.length > 1 &&
              images?.map((image: any, j: number) => (
                <div
                  key={j}
                  className={`w-full aspect-square flex items-center flex-shrink-0 flex-grow-0 flex-[calc(50%-0.5rem)] relative ${activeThumbnail?.index !== j && "hover:scale-105 hover:shadow-shadow-image-mobile"} transition duration-200 ease-in-out`}
                >
                  <button
                    onClick={() =>
                      setActiveThumbnail({
                        index: j,
                        url: image?.imageUrl,
                        name: image?.imageName,
                      })
                    }
                    aria-label={`${image?.imageName} image`}
                    className={`${activeThumbnail?.index === j && "cursor-default pointer-events-none"} w-full h-full`}
                  >
                    {activeThumbnail?.index === j && (
                      <div
                        className={`border border-dashed border-blue absolute top-0 left-0 bottom-0 right-0 z-10 before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 ${isEven(i) ? "before:-left-[60vw]" : "before:-right-[60vw]"} before:h-[1px] before:w-[60vw] before:border before:border-dashed before:border-t before:border-blue before:z-20`}
                      >
                        <span className="topLeftBlueHandle" />
                        <span className="topRightBlueHandle" />
                        <span className="bottomLeftBlueHandle" />
                        <span className="bottomRightBlueHandle" />
                      </div>
                    )}
                    <Image
                      src={image?.imageUrl ?? "/default-image.jpg"}
                      alt={image?.imageName ?? ""}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      className="object-cover"
                    />
                  </button>
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
    </AnimatePresence>
  );
}
