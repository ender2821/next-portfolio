"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Slug } from "sanity";
import { useMediaQuery, useTheme } from "@mui/material";

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

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      if (images.length > 6) {
        if (currentIndex === images.length - (xl ? 6 : 3)) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
      }
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      if (images.length > 6) {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      }
    }
  }, [isAnimating]);

  const prevSlideClick = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      if (images.length > 6) {
        setCurrentIndex(images.length - (xl ? 6 : 3));
      }
    }
  }, [isAnimating]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(nextSlide, 5000);
  }, [nextSlide]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, resetTimer]);

  const handleClick = useCallback(
    (direction: "left" | "right") => {
      if (direction === "left" && currentIndex > 0) {
        prevSlide();
      } else if (direction === "left") {
        prevSlideClick();
      } else {
        nextSlide();
      }
      resetTimer();
    },
    [prevSlide, nextSlide, resetTimer]
  );

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-y-4 relative">
        {images.length > 6 && (
          <div>
            <button
              onClick={() => handleClick("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 iconButton shadow-md z-10"
              aria-label="Previous images"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
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
            <Link
              href="/work"
              className="max-h-[3.5rem] lg:col-start-2 sm:m-0 sm:col-span-3 md:col-span-1 siteButton w-full sm:w-auto mt-8 mb-8"
            >
              {button}
            </Link>
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
          <div>
            <button
              onClick={() => handleClick("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 iconButton shadow-md z-10"
              aria-label="Next images"
              disabled={isAnimating}
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        )}
      </div>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (xl ? 16.666 : 33.333)}%)`,
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
            <Link
              key={index}
              href={`/work/${image?.slug?.current}`}
              className="flex-none w-1/3 xl:w-1/6 px-2 first:pl-0 last:pr-0 "
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
                <h3 className="text-lg font-semibold truncate m-0">
                  {image?.name ?? ""}
                </h3>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
