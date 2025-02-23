"use client";

import { useState } from "react";
import HomeGlacierImage from "./HomeGlacierImage";
import HomeGlacierDrawer from "./HomeGlacierDrawer";
import { PortableText } from "next-sanity";
import { ImageList, ImageListItem } from "@mui/material";

interface HomeGlacierProps {
  imageUrl: string;
  imageName: string;
  glacierSubtitle: string;
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
  const { imageUrl, imageName, glacierSubtitle, glacierGallery } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <>
      {!isOpen && (
        <HomeGlacierImage
          src={imageUrl}
          alt={imageName ?? "default image description"}
          toggleDrawer={toggleDrawer}
          isOpen={isOpen}
          className={
            "col-span-6 sm:col-start-4 sm:row-start-2 sm:row-end-4 sm:col-span-3 relative lg:bottom-[-2rem] lg:col-span-2 lg:col-start-5 lg:row-start-1 lg:row-span-2"
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
            "col-span-6 sm:col-span-3 relative lg:left-[-2rem] lg:col-span-2 lg:col-start-1"
          }
          shadow={"right"}
        />
        <div className="col-span-3">
          <h2>Meet Glacier</h2>
          <h3>{glacierSubtitle}</h3>
          <PortableText value={props?.glacierContent} />
        </div>
        <ImageList variant="masonry" cols={3} gap={8}>
          {glacierGallery.map((item, i) => (
            <ImageListItem key={`${item.imageName}${i}`}>
              <img
                srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
                alt={item.imageName ?? ""}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </HomeGlacierDrawer>
    </>
  );
}
