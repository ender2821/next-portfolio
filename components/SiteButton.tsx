import Link from "next/link";
import { ReactNode } from "react";

interface SiteButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  textHover?: "light" | "dark";
  selected?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function SiteButton(props: SiteButtonProps) {
  const {
    children,
    href,
    onClick,
    className,
    textHover,
    selected,
    type,
    ...rest
  } = props;

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
          className={`siteButton ${className} max-w-[300px]`}
          onClick={onClick}
          type={type ? type : "button"}
          {...rest}
        >
          <span className="relative z-20">{children}</span>
        </button>
      )}
    </>
  );
}
