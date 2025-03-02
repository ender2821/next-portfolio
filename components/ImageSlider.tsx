"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Image 1",
    title: "Beautiful Landscape",
    link: "/landscape",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Image 2",
    title: "City Skyline",
    link: "/skyline",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Image 3",
    title: "Mountain View",
    link: "/mountain",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Image 4",
    title: "Serene Beach",
    link: "/beach",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Image 5",
    title: "Forest Trail",
    link: "/forest",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Image 6",
    title: "Desert Sunset",
    link: "/desert",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 3 + images.length) % images.length
      );
    }
  }, [isAnimating]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(nextSlide, 7000); // Changed to 5 seconds
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
      if (direction === "left") {
        prevSlide();
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
    <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-[400px]"
        style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((image, index) => (
          <Link key={index} href={image.link} className="flex-none w-1/3 p-2">
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-600 ease-in-out object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <h3 className="text-lg font-semibold truncate">
                  {image.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button
        onClick={() => handleClick("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-md transition-all duration-300 ease-in-out z-10"
        aria-label="Previous images"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={() => handleClick("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-md transition-all duration-300 ease-in-out z-10"
        aria-label="Next images"
        disabled={isAnimating}
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}
