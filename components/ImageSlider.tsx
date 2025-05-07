"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Slug } from "sanity";
import { useMediaQuery, useTheme } from "@mui/material";
import SiteButton from "./SiteButton";

interface ImageSliderProps {
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

export default function ImageSlider(props: ImageSliderProps) {
  const { images, button } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      if (images.length > 6) {
        if (currentIndex === images.length - (xl ? 6 : md ? 3 : 2)) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
      }
    }
  }, [setCurrentIndex, currentIndex, images, xl, md, isAnimating]);

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      if (images.length > 6) {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      }
    }
  };

  const prevSlideClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      if (images.length > 6) {
        setCurrentIndex(images.length - (xl ? 6 : md ? 3 : 2));
      }
    }
  };

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(nextSlide, 4000);
  }, [timerRef, nextSlide]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, resetTimer]);

  const handleClick = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex > 0) {
      prevSlide();
    } else if (direction === "left") {
      prevSlideClick();
    } else {
      nextSlide();
    }
    resetTimer();
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="relative hidden sm:block ">
      <div className="py-8 lg:py-0 grid grid-cols-1 sm:grid-cols-3 lg:gap-y-4 relative">
        {images.length > 6 && (
          <div className="relative">
            <button
              onClick={() => handleClick("left")}
              className="lg:absolute left-0 top-1/2 lg:-translate-y-1/2 iconButton shadow-md z-10"
              aria-label="Previous images"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            {lg && (
              <pre className="text-xs text-white-decoration absolute left-8">
                {`const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      if (images.length > 6) {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      }
    }
  };`}
              </pre>
            )}
          </div>
        )}
        <div className="justify-self-center">
          <div
            className={
              "hidden lg:flex lg:h-[3.5rem] items-center justify-center relative text-white-decoration "
            }
          >
            <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-[3.5rem] bg-white-border z-0"></span>
            <span className="bg-white z-10 text-xs">56px</span>
          </div>
          {button && (
            <SiteButton
              href="/work"
              className="max-h-[3.5rem] lg:col-start-2 sm:m-0 sm:col-span-3 md:col-span-1 w-full sm:w-auto mt-8 mb-8 relative z-10"
            >
              {button}
            </SiteButton>
          )}
          <div
            className={
              "hidden lg:flex lg:h-[3.5rem] items-center justify-center relative text-white-decoration"
            }
          >
            <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-[3.5rem] bg-white-border z-0"></span>
            <span className="bg-white z-10 text-xs">56px</span>
          </div>
        </div>
        {images.length > 6 && (
          <div className="relative">
            {lg && (
              <pre className="text-xs text-white-decoration absolute left-0">
                {`const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      if (images.length > 6) {
        if (currentIndex === images.length - (xl ? 6 : md ? 3 : 2)) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
      }
    }
  };`}
              </pre>
            )}
            <button
              onClick={() => handleClick("right")}
              className="float-right lg:absolute right-0 top-1/2 lg:-translate-y-1/2 iconButton shadow-md z-10"
              aria-label="Next images"
              disabled={isAnimating}
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        )}
      </div>
      <div
        className="flex transition-transform duration-500 ease-in-out -ml-2 -mr-2"
        style={{
          transform: `translateX(-${currentIndex * (xl ? 16.666 : md ? 33.333 : 50)}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map(
          (
            image: {
              name: string | null;
              slug: Slug | null;
              workPageLayout: {
                workLayoutGallery: {
                  imageUrl: string | null;
                  imageName: string | null;
                } | null;
              } | null;
            },
            index: number
          ) => (
            <div className="px-2 w-1/2 md:w-1/3 xl:w-1/6 flex-none" key={index}>
              <Link
                href={`/work/${image?.slug?.current}`}
                className="hover:scale-105 hover:shadow-shadow-image-mobile transition duration-300 ease-in-out block"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={
                      image?.workPageLayout?.workLayoutGallery?.imageUrl ??
                      "/default-image.jpg"
                    }
                    alt={
                      image?.workPageLayout?.workLayoutGallery?.imageName ?? ""
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="w-full border-white-decoration border bg-white bg-opacity-50 text-white p-2 text-center">
                  <p className="font-normal truncate m-0 text-black-bg uppercase">
                    {image?.name ?? ""}
                  </p>
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}
