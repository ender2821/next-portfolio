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
      <HomeGlacierImage
        src={imageUrl}
        alt={imageName ?? "default image description"}
        toggleDrawer={toggleDrawer}
      />
      <HomeGlacierDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
        <h2>THIS IS THE DRAWER</h2>
      </HomeGlacierDrawer>
    </>
  );
}
