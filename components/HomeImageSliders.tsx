"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import ImageSlider from "./ImageSlider";
import MobileImageSlider from "./MobileImageSlider";
import { Slug } from "@sanity/types";

interface HomeImageSlidersProps {
  images: any[];
}

export default function HomeImageSliders(props: HomeImageSlidersProps) {
  const { images } = props;
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {md ? (
        <ImageSlider images={images} />
      ) : (
        <MobileImageSlider images={images} />
      )}
    </>
  );
}
