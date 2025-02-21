"use client";

import { useState, useCallback } from "react";

import { useMediaQuery, useTheme } from "@mui/system";
import { raleway } from "@/app/fonts";

export default function HomePageTitle() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  const [styleObject, setStyleObject] = useState<{
    [key: string]: string | null;
  }>({});

  const spanStyle = `text-white uppercase w-full block font-bold text-[3.125rem] leading-[2.2rem] lg:text-[7.5rem] lg:leading-[5.25rem]`;

  const stylesToGet = [
    "color",
    "font-family",
    "font-size",
    "font-style",
    "font-weight",
    "line-height",
  ];

  const measuredRef = useCallback((node: HTMLHeadingElement | null) => {
    if (node !== null) {
      const styles = getComputedStyle(node);
      const tempStyleObject = stylesToGet.reduce(
        (acc, style) => {
          const camelCaseStyle = style.replace(/-([a-z])/g, (g) =>
            g[1].toUpperCase()
          );
          acc[camelCaseStyle] = styles.getPropertyValue(style) || null;
          return acc;
        },
        {} as { [key: string]: string | null }
      );
      setStyleObject(tempStyleObject);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="invisible left-[-9999px] absolute">
        Josh Jensen Creative
      </h1>
      <span
        ref={measuredRef}
        className={`${raleway.className} ${spanStyle} border-b border-black-decoration`}
      >
        Josh
      </span>
      <span className="w-4 h-4 lg:w-8 lg:h-8 text-xs text-black-decoration flex items-center justify-center">
        {lg ? "32px" : "16px"}
      </span>
      <span
        className={`${raleway.className} ${spanStyle} border-b border-t border-black-decoration`}
      >
        Jensen
      </span>
      <span className="w-4 h-4 lg:w-8 lg:h-8 text-xs text-black-decoration flex items-center justify-center">
        {lg ? "32px" : "16px"}
      </span>
      <span
        className={`${raleway.className} ${spanStyle} border-t border-black-decoration mb-2 lg:mb-4`}
      >
        Creative
      </span>
      <pre className="w-full text-xs text-black-decoration lg:absolute lg:top-[23rem] lg:left-8">
        {JSON.stringify(styleObject, null, 2).replace(/"([^"]+)":/g, "$1:")}
      </pre>
    </div>
  );
}
