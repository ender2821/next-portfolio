import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-24">
      <ImageSlider />
      THIS IS MY APPS PORTFOLIO
      <Link href="/resume">Resume</Link>
    </main>
  );
}
