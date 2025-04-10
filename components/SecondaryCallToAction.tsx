"use client";

import SiteButton from "./SiteButton"; // Replace with the correct path to SiteButton
import { useTheme, useMediaQuery } from "@mui/material";

export default function SecondaryCallToAction() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <div className="lg:fixed bottom-7 w-full flex justify-center lg:pr-8 lg:justify-end py-8 lg:py-0 z-40">
      <div className="relative lg:before:-left-[90vw] before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 xl:before:h-[1px] lg:before:w-[90vw] lg:before:border lg:before:border-dashed lg:before:border-t lg:before:border-blue before:z-20">
        <SiteButton
          href="/contact"
          selected={true}
          textHover={lg ? "dark" : "light"}
        >
          Like What you See? Let's chat
        </SiteButton>
      </div>
    </div>
  );
}
