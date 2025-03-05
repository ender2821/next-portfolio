"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import ImageSlider from "./ImageSlider";
import MobileImageSlider from "./MobileImageSlider";

interface HomeImageSlidersProps {
  images: any[];
  button: string;
}

export default function HomeImageSliders(props: HomeImageSlidersProps) {
  const { images, button } = props;
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {md ? (
        <ImageSlider images={images} button={button} />
      ) : (
        <MobileImageSlider images={images} button={button} />
      )}
    </>
  );
}
