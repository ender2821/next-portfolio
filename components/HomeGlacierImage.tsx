import PawPrint from "@/public/assets/paw-print.svg";
import Image from "next/image";
import TiltImage from "./TiltImage";
import { MouseEventHandler } from "react";

interface HomeGlacierImageProps {
  src: string;
  alt: string;
  toggleDrawer(open: boolean): MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function HomeGlacierImage(props: HomeGlacierImageProps) {
  const { src, alt, toggleDrawer } = props;
  return (
    <TiltImage className="col-span-6 sm:col-start-4 sm:row-start-2 sm:row-end-4 sm:col-span-3 relative lg:bottom-[-2rem] grid-col lg:col-span-2 lg:col-start-5 lg:row-start-1 lg:row-span-2">
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={1200}
          style={{ objectFit: "contain", width: "100%" }}
        />
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
      </div>
    </TiltImage>
  );
}
