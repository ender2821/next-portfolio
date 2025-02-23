"use client";
import Tilt from "react-parallax-tilt";

interface TiltImageProps {
  children: React.ReactNode;
  className?: string;
  shadow?: "left" | "right";
}

export default function TiltImage({
  children,
  className,
  shadow,
}: TiltImageProps) {
  return (
    <div className={className}>
      <Tilt
        className={`${shadow === "left" ? " shadow-shadow-image-left" : ""} ${shadow === "right" ? " shadow-shadow-image-right" : ""} overflow-hidden`}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={800}
        glareEnable={true}
        glareMaxOpacity={0.15}
        scale={1.01}
        gyroscope={true}
        transitionSpeed={2000}
      >
        <div className="relative">{children}</div>
      </Tilt>
    </div>
  );
}
