"use client";

import { useState } from "react";
import HomeGlacierImage from "./HomeGlacierImage";
import HomeGlacierDrawer from "./HomeGlacierDrawer";
import { PortableText } from "next-sanity";
import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SiteButton from "./SiteButton";
import Image from "next/image";
import DogIcon from "@/public/assets/dogIcon.svg";

interface HomeGlacierProps {
  imageUrl: string;
  imageName: string;
  glacierSubtitle: string;
  meetGlacierButtonCTA: string;
  glacierContent: {
    _type: string;
    children?: {
      marks?: string[];
      text?: string;
      _type: "span";
      _key: string;
    }[];
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    _key: string;
  }[];
  glacierGallery: { imageUrl: string | null; imageName: string | null }[];
}

export default function HomeGlacier(props: HomeGlacierProps) {
  const {
    imageUrl,
    imageName,
    glacierSubtitle,
    meetGlacierButtonCTA,
    glacierGallery,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {!isOpen && (
        <HomeGlacierImage
          src={imageUrl}
          alt={imageName ?? "default image description"}
          toggleDrawer={toggleDrawer}
          isOpen={isOpen}
          className={
            "z-10 col-span-6 sm:col-start-4 sm:row-start-2 sm:row-end-4 sm:col-span-3 relative sm:bottom-[-2rem] lg:col-span-2 lg:col-start-5 lg:row-start-1 lg:row-span-2"
          }
          shadow={"left"}
        />
      )}
      <HomeGlacierDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
        <HomeGlacierImage
          src={imageUrl}
          alt={imageName ?? "default image description"}
          toggleDrawer={toggleDrawer}
          isOpen={isOpen}
          className={
            "z-10 col-span-6 sm:col-span-3 relative lg:left-[-3.5rem] lg:col-span-2 lg:col-start-1"
          }
          shadow={"right"}
        />
        <div className="col-span-6 sm:col-span-5 lg:col-span-3 glacierContent">
          <h2 className="glacerTitle">Meet Glacier</h2>
          {glacierSubtitle ? (
            <h3 className="lg:w-[calc(66.6666%-1rem)]">{glacierSubtitle}</h3>
          ) : null}
          <div className=" lg:grid lg:grid-cols-3 lg:gap-4 relative">
            <DogIcon className="absolute -translate-x-[calc(100%+1rem)] w-[7.5rem] h-[7.5rem] hidden lg:block" />
            <PortableText value={props?.glacierContent} />
            {meetGlacierButtonCTA ? (
              <SiteButton
                href="/contact"
                className="max-h-[3.5rem] lg:col-start-2 sm:m-0 sm:col-span-3 md:col-span-1 w-full sm:w-auto mt-8 mb-8"
              >
                {meetGlacierButtonCTA}
              </SiteButton>
            ) : null}
          </div>
        </div>
        <ImageList
          // variant="masonry"
          cols={lg ? 5 : 3}
          gap={16}
          className="col-span-6 sm:col-span-5 !overflow-y-visible lg:mt-12"
        >
          {glacierGallery.map((item, i) => (
            <ImageListItem key={`${item.imageName}${i}`}>
              <Image
                src={`${item.imageUrl}`}
                alt={item.imageName ?? ""}
                width={960}
                height={1200}
                quality={100}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </HomeGlacierDrawer>
    </>
  );
}
