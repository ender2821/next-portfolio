"use client";

import Link from "next/link";
import { useMediaQuery, useTheme } from "@mui/system";

interface HomeCtaButtonProps {
  heroCTAButtonTxt: string;
}

export default function HomeCtaButton(props: HomeCtaButtonProps) {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {lg ? (
        <div className="absolute h-[88%] flex flex-col justify-end top-[-1px] shadow-[inset_0_0_0_1px_#3B4647] left-[336px]">
          <div className="relative inline-block">
            <span className="absolute bottom-[-1.5rem] left-1/2 translate-x-[-50%] text-black-decoration text-xs">
              300px
            </span>
            <span className="absolute right-[-2.5rem] top-1/2 translate-y-[-50%] text-black-decoration text-xs">
              50px
            </span>
            <Link
              href="/contact"
              className="siteButton shadow-shadow-button-right z-20 relative w-[300px]"
            >
              {props.heroCTAButtonTxt}
            </Link>
            <span className="absolute h-[1px] bg-black-decoration top-0 w-[calc(100%+4rem)] -left-8 z-10" />
            <span className="absolute h-[1px] bg-black-decoration bottom-0 w-[calc(100%+4rem)] -left-8 z-10" />
            <span className="absolute w-[1px] bg-black-decoration left-0 h-[calc(100%+4rem)] -top-8 z-10" />
            <span className="absolute w-[1px] bg-black-decoration right-0 h-[calc(100%+4rem)] -bottom-8 z-10" />
          </div>
        </div>
      ) : (
        <Link
          href="/contact"
          className="col-span-6 max-h-[3.5rem] sm:m-0 sm:col-span-3 siteButton shadow-shadow-button-right w-full sm:w-auto mt-8 mb-8"
        >
          {props.heroCTAButtonTxt}
        </Link>
      )}
    </>
  );
}
