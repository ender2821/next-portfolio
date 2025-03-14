"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { Box, MobileStepper, Paper, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Slug } from "sanity";

const theme = createTheme({ palette: { primary: { main: "#000000" } } });

interface MobileImageSliderProps {
  images: {
    name: string | null;
    slug: Slug | null;
    workPageLayout: {
      workLayoutGallery: {
        imageUrl: string | null;
        imageName: string | null;
      } | null;
    } | null;
  }[];
  button: string;
}

// Sample slide data

export default function MobileImageSlider(props: MobileImageSliderProps) {
  const { images, button } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(
    null
  );
  const maxSteps = images.length;

  const goToNextSlide = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    setSwipeDirection("left");
  };

  const goToPrevSlide = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
    setSwipeDirection("right");
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPrevSlide,
    onSwiping: () => {
      setSwipeDirection(null);
    },
    trackMouse: true,
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="block md:hidden">
        <Link
          href="/work"
          className="max-h-[3.5rem] lg:col-start-2 sm:m-0 sm:col-span-3 md:col-span-1 siteButton w-full sm:w-auto mt-8 mb-8"
        >
          {button}
        </Link>

        <div>
          {/* Current Slide */}
          <Link href={`/work/${images[activeStep]?.slug?.current}`}>
            <div
              className={`relative w-full transition-transform duration-300 ease-out ${
                swipeDirection === "left"
                  ? "-translate-x-full"
                  : swipeDirection === "right"
                    ? "translate-x-full"
                    : ""
              }`}
            >
              <div className="relative w-full aspect-square">
                <Image
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={
                    images[activeStep]?.workPageLayout?.workLayoutGallery
                      ?.imageUrl || "/placeholder.svg"
                  }
                  alt={
                    images[activeStep]?.workPageLayout?.workLayoutGallery
                      ?.imageName || ""
                  }
                />
              </div>
              <div className="w-full border-white-decoration border bg-white bg-opacity-50 text-white p-2 text-center">
                <p className="font-normal truncate m-0 text-black-bg uppercase">
                  {images[activeStep]?.name || ""}
                </p>
              </div>
            </div>
          </Link>

          {/* Dots Stepper */}
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              backgroundColor: "transparent",
              padding: "2rem 1rem",
              "& .MuiMobileStepper-dot": {
                margin: "0 4px",
                backgroundColor: "#6EC9F2",
              },
              "& .MuiMobileStepper-dotActive": { backgroundColor: "#3B4647" },
            }}
            nextButton={<Box />}
            backButton={<Box />}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
