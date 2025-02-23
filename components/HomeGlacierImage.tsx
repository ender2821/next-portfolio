import PawPrint from "@/public/assets/paw-print.svg";
import Image from "next/image";
import TiltImage from "./TiltImage";
import { MouseEventHandler } from "react";
import CloseIcon from "@/public/assets/x-icon.svg";

interface HomeGlacierImageProps {
  src: string;
  alt: string;
  isOpen: boolean;
  shadow?: "left" | "right";
  className?: string;
  toggleDrawer(open: boolean): MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function HomeGlacierImage(props: HomeGlacierImageProps) {
  const { src, alt, isOpen, className, shadow, toggleDrawer } = props;
  return (
    <TiltImage className={className} shadow={shadow}>
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={1200}
          style={{ objectFit: "contain", width: "100%" }}
        />
        {isOpen ? (
          <button
            className="iconButton absolute bottom-4 left-4 "
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </button>
        ) : (
          <button
            className="absolute bottom-4 left-4 flex items-center gap-4 group"
            onClick={toggleDrawer(true)}
          >
            <span className="iconButton">
              <PawPrint />
            </span>
            <span className="uppercase transition-opacity opacity-0 group-hover:opacity-100 font-bold">
              Meet Glacier
            </span>
          </button>
        )}
      </div>
    </TiltImage>
  );
}
