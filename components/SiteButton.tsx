import Link from "next/link";
import { ReactNode } from "react";

interface SiteButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  textHover?: "light" | "dark";
  selected?: boolean;
}

export default function SiteButton(props: SiteButtonProps) {
  const { children, href, onClick, className, textHover, selected, ...rest } =
    props;

  return (
    <>
      {href ? (
        <Link
          className={`siteButton ${className} ${textHover === "light" && "hover:text-white"}  transition-colors !duration-0 relative`}
          href={href}
          {...rest}
        >
          {selected && (
            <>
              <span className="topLeftBlueHandle" />
              <span className="topRightBlueHandle" />
              <span className="bottomLeftBlueHandle" />
              <span className="bottomRightBlueHandle" />
            </>
          )}
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
