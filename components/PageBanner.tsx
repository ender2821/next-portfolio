"use client";

import Image from "next/image";
import { raleway } from "../app/(app)/fonts";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface PageBannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageName: string;
  backButton?: boolean;
  pageIcon?: React.ReactElement;
}

export default function PageBanner(props: PageBannerProps) {
  const { title, subtitle, imageUrl, imageName, backButton, pageIcon } = props;
  const router = useRouter();
  return (
    <section className="h-[300px] lg:h-[400px] overflow-hidden w-full relative background">
      <div className="h-[300px] lg:h-[400px] w-full bg-black-bg opacity-80 z-20 absolute top-0 left-0"></div>
      {imageUrl ? (
        <div
          className="hidden lg:block h-[5.375rem] w-full absolute top-[3rem] z-10 overflow-hidden"
          style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
        >
          <Image
            src={imageUrl}
            alt={imageName || "Hero Image"}
            width={900}
            height={1200}
            className="absolute w-full h-full sm:h-auto object-contain top-1/2 -translate-y-[42%] scaling-image-down"
          />
        </div>
      ) : null}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={imageName || "Hero Image"}
          width={900}
          height={1200}
          className="absolute w-full h-full sm:h-auto object-cover sm:object-contain sm:top-1/2 sm:-translate-y-1/2 scaling-image-up"
        />
      ) : null}
      {title && (
        <h1
          className={`${raleway.className} mt-[3rem] ml-4 md:ml-8 z-30 relative text-white uppercase w-full block font-bold text-[3.125rem] leading-[2.2rem] lg:text-[7.5rem] lg:leading-[5.25rem]`}
        >
          {title}
        </h1>
      )}
      {subtitle && (
        <p className="z-30 relative text-[1.2rem] lg:text-[1.5rem] lg:leading-[2rem] pl-4 md:pl-8 pt-4 lg:pt-8">
          {subtitle}
        </p>
      )}
      {backButton && (
        <button
          className="iconButton z-20 relative ml-4 md:ml-8"
          onClick={() => router.back()}
        >
          <ChevronLeft />
        </button>
      )}
      {pageIcon && (
        <div className="z-30 relative sm:absolute sm:right-8 left-4 sm:left-auto sm:top-1/2 sm:-translate-y-1/2 w-[7.5rem] h-[7.5rem] lg:w-[14rem] lg:h-[14rem]">
          {React.cloneElement(
            pageIcon as React.ReactElement<{ className?: string }>,
            { className: "w-full h-full" }
          )}
        </div>
      )}
    </section>
  );
}
