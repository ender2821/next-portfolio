"use client";
import Image from "next/image";
import { isEven } from "@/helpers";
import TiltImage from "@/components/TiltImage";
import { PortableText } from "next-sanity";
import { WorkLayout } from "@/__sanity-generated__/types";
import SiteButton from "./SiteButton";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowResize";
import { useMediaQuery, useTheme } from "@mui/material";
import WorkLandingPageThumbnail from "./WorkLandingPageThumbnail";

interface WorkLandingPageSectionProps extends WorkLayout {
  i: number;
  buttonUrl: string;
  images: { imageUrl: string | null; imageName: string | null }[];
}

export default function WorkLandingPageSection(
  props: WorkLandingPageSectionProps
) {
  const { i, workLayoutTitle, workLayoutContent, images, buttonUrl } = props;
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

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
        className={`${isEven(i) ? "bg-[#fff]" : "bg-black-bg"} sm:pb-0 px-4 md:px-8 lg:pb-0 lg:px-8 grid grid-cols-6 gap-4 w-full relative`}
        key={i}
      >
        {isEven(i) ? (
          <div className="sectionMtnRightWhite absolute right-0 top-0 -translate-y-1/2 z-30" />
        ) : (
          <div className="sectionMtnLeftBlack absolute left-0 top-0 -translate-y-1/2" />
        )}
        <motion.div
          animate={{
            height: lg ? imageContainHeight : "auto",
          }}
          exit={{ height: 0 }}
          className={`${isEven(i) ? "sm:col-start-1 order-0" : "sm:col-start-4 lg:col-start-5 order-2"} pt-16 sm:pt-0 col-span-6 xl:self-center sm:col-span-3 lg:col-span-2 sm:-mt-8 z-30 row-start-1`}
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
          {lgDown && (
            <div className="grid grid-cols-4 gap-4 mt-4">
              {images.length > 1 &&
                images?.map((image: any, j: number) => (
                  <WorkLandingPageThumbnail
                    activeThumbnail={{
                      ...activeThumbnail,
                      url: activeThumbnail.url ?? "",
                      name: activeThumbnail.name ?? "",
                    }}
                    image={image}
                    index={j}
                    evenIndex={i}
                    setActiveThumbnail={setActiveThumbnail}
                    key={j}
                  />
                ))}
            </div>
          )}
        </motion.div>

        <div
          className={`${isEven(i) ? "text-black-bg lg:pl-8 lg:col-start-3" : "text-white lg:pr-8 lg:col-start-2 sm:pr-4"} col-span-6 sm:pl-4 sm:pt-16 xl:pt-[10rem] sm:col-span-3 z-10`}
        >
          {workLayoutTitle ? (
            <h2
              className={`${isEven(i) ? "text-black-bg text-left before:bg-white-border after:bg-white-border" : "text-white lg:text-right before:bg-black-decoration after:bg-black-decoration"} text-[3rem] leading-[2.5rem] lg:text-[3.75rem] lg:leading-[3rem] mt-4 sm:mt-0 lg:mb-8`}
            >
              {workLayoutTitle}
            </h2>
          ) : null}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <PortableText
              value={workLayoutContent ? workLayoutContent : []}
              components={{
                block: {
                  normal: ({ children }) => {
                    return (
                      <p
                        className={`${isEven(i) ? "" : workLayoutContent && workLayoutContent.length < 3 && "xl:first-of-type:col-start-2"} ${isEven(i) ? "" : workLayoutContent && workLayoutContent.length === 1 && "xl:first-of-type:col-start-3"} last-of-type:mb-0`}
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
          className={`hidden lg:flex items-end ${isEven(i) ? "lg:col-start-6" : "lg:col-start-1"} row-start-1`}
        >
          <div
            className={`${isEven(i) ? "xl:before:bg-white-content-bg before:right-[calc(100%+1rem)]" : "flex-row-reverse xl:before:bg-black-content-bg before:left-[calc(100%+1rem)]"} bg-opacity-0 flex flex-wrap w-full gap-4 workPageThumbnails relative opacity`}
          >
            {lg &&
              images.length > 1 &&
              images?.map((image: any, j: number) => (
                <WorkLandingPageThumbnail
                  activeThumbnail={{
                    ...activeThumbnail,
                    url: activeThumbnail.url ?? "",
                    name: activeThumbnail.name ?? "",
                  }}
                  image={image}
                  index={j}
                  evenIndex={i}
                  setActiveThumbnail={setActiveThumbnail}
                  key={j}
                />
              ))}
          </div>
        </div>
        <div className="py-8 sm:pt-16 sm:pb-28 lg:p-0 col-span-6 lg:mt-[3rem] lg:mb-[4rem]">
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
