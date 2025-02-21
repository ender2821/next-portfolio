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
    <TiltImage className="lg:absolute lg:right-8 lg:bottom-[-2rem]">
      <div className="relative">
        <Image src={src} alt={alt} width={578} height={732} />
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
