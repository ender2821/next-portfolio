"use client";

import { useRef, useState, useEffect } from "react";

import { useMediaQuery } from "@mui/system";
import { raleway } from "@/app/fonts";

export default function HomePageTitle() {
  const ref = useRef<HTMLDivElement>(null);
  const lg = useMediaQuery("(min-width: 1024px)");

  const [styleObject, setStyleObject] = useState<{
    [key: string]: string | null;
  }>({});

  const spanStyle = `text-white uppercase w-full block font-bold lg:text-[7.5rem] lg:leading-[5.25rem]`;

  const stylesToGet = [
    "color",
    "font-family",
    "font-size",
    "font-style",
    "font-weight",
    "line-height",
  ];

  useEffect(() => {
    if (ref.current && lg) {
      const styles = getComputedStyle(ref.current);
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
  }, [ref.current, lg]);

  return (
    <div>
      <span
        ref={ref}
        className={`${raleway.className} ${spanStyle} border-b border-white mb-8`}
      >
        Josh
      </span>
      <span
        className={`${raleway.className} ${spanStyle} border-b border-t border-white mb-8`}
      >
        Jensen
      </span>
      <span
        className={`${raleway.className} ${spanStyle} border-t border-white mb-8`}
      >
        Creative
      </span>
      {lg ? (
        <pre>
          {JSON.stringify(styleObject, null, 2).replace(/"([^"]+)":/g, "$1:")}
        </pre>
      ) : null}
    </div>
  );
}
