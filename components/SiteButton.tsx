import Link from "next/link";
import { ReactNode } from "react";

interface SiteButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  textHover?: "light" | "dark";
}

export default function SiteButton(props: SiteButtonProps) {
  const { children, href, onClick, className, textHover, ...rest } = props;

  return (
    <>
      {href ? (
        <Link
          className={`siteButton ${className} ${textHover === "light" && "hover:text-white"}  transition-colors !duration-0`}
          href={href}
          {...rest}
        >
          <span className="z-10 relative">{children}</span>
        </Link>
      ) : (
        <button
          className={`siteButton ${className}`}
          onClick={onClick}
          {...rest}
        >
          <span>{children}</span>
        </button>
      )}
    </>
  );
}
