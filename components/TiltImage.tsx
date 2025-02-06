"use client";
import Tilt from "react-parallax-tilt";

interface TiltImageProps {
  width: number;
  height: number;
  children: React.ReactNode;
}

export default function TiltImage({ width, height, children }: TiltImageProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Tilt
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={800}
        glareEnable={true}
        glareMaxOpacity={0.15}
        scale={1.01}
        gyroscope={true}
        transitionSpeed={2000}
      >
        <div
          className="relative"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          {children}
        </div>
      </Tilt>
    </div>
  );
}
