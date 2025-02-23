"use client";

import { useState } from "react";
import HomeGlacierImage from "./HomeGlacierImage";
import HomeGlacierDrawer from "./HomeGlacierDrawer";

interface HomeGlacierProps {
  imageUrl: string;
  imageName: string;
}

export default function HomeGlacier(props: HomeGlacierProps) {
  const { imageUrl, imageName } = props;
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
        />
      )}
      <HomeGlacierDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
        <h2>THIS IS THE DRAWER</h2>
        <HomeGlacierImage
          src={imageUrl}
          alt={imageName ?? "default image description"}
          toggleDrawer={toggleDrawer}
          isOpen={isOpen}
          className={
            "col-span-6 sm:col-span-3 relative lg:left-[-2rem] lg:col-span-2 lg:col-start-1"
          }
        />
      </HomeGlacierDrawer>
    </>
  );
}
