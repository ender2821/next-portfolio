import { useState } from "react";
import Link from "next/link";
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
      <div className="mx-auto max-w-md px-4 py-8">
        <Link
          href="/work"
          className="max-h-[3.5rem] lg:col-start-2 sm:m-0 sm:col-span-3 md:col-span-1 siteButton w-full sm:w-auto mt-8 mb-8"
        >
          {button}
        </Link>

        <Paper
          elevation={3}
          className="overflow-hidden rounded-lg"
          {...handlers}
          aria-label="Image slider"
          role="region"
        >
          {/* Current Slide */}
          <Link href={`/work/${images[activeStep]?.slug?.current}`}>
            <div
              className={`relative h-64 w-full transition-transform duration-300 ease-out ${
                swipeDirection === "left"
                  ? "-translate-x-full"
                  : swipeDirection === "right"
                    ? "translate-x-full"
                    : ""
              }`}
            >
              <div></div>
              <img
                className="h-full w-full object-cover"
                src={
                  images[activeStep]?.workPageLayout?.workLayoutGallery
                    ?.imageUrl || "/placeholder.svg"
                }
                alt={
                  images[activeStep]?.workPageLayout?.workLayoutGallery
                    ?.imageName || ""
                }
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <Typography className="text-white">
                  {images[activeStep]?.name || ""}
                </Typography>
              </div>
            </div>
          </Link>

          {/* Swipe Instructions */}
          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-4 text-white opacity-50">
            <span className="text-2xl">&lt;</span>
            <span className="text-2xl">&gt;</span>
          </div>

          {/* Dots Stepper */}
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              backgroundColor: "transparent",
              padding: "8px 16px",
              "& .MuiMobileStepper-dot": { margin: "0 4px" },
              "& .MuiMobileStepper-dotActive": {
                backgroundColor: "primary.main",
              },
            }}
            nextButton={<Box />}
            backButton={<Box />}
          />
        </Paper>
      </div>
    </ThemeProvider>
  );
}
