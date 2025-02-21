"use client";
import Tilt from "react-parallax-tilt";

interface TiltImageProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltImage({ children, className }: TiltImageProps) {
  return (
    <div className={`${className} flex justify-center items-center`}>
      <Tilt
        className="overflow-hidden  shadow-shadow-image-left"
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
