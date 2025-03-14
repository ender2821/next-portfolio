"use client";

import { useEffect, useState } from "react";

export default function HeaderScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <p className="hidden sm:block text-xs text-black-decoration absolute bg-black-bg left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 mb-0 pr-2 pl-2 z-10">
      {`${width}px`}
    </p>
  );
}
