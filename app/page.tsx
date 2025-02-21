import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/queries/homeQueries";
import { PortableText } from "next-sanity";
import HomePageTitle from "@/components/HomePageTitle";
import HomeCtaButton from "@/components/HomeCtaButton";

export default async function Home() {
  const { data: home } = await sanityFetch({ query: HOME_QUERY, params: {} });
  console.log(home);
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="p-4 lg:p-8 relative w-full h-[720px]">
        <HomePageTitle />
        {home?.heroCTAButtonTxt ? (
          <HomeCtaButton heroCTAButtonTxt={home.heroCTAButtonTxt} />
        ) : null}
        {home?.heroTitle ? (
          <div className="w-[400px] homeHeroTitle left-1/2 translate-x-[-50%] relative">
            <PortableText value={home.heroTitle} />
          </div>
        ) : null}
        <div className="lg:absolute lg:right-8 lg:bottom-[-2rem]">
          <Image
            src={home?.heroImage?.imageUrl ?? "/default-image.jpg"}
            alt={home?.heroImage?.imageName ?? "default image description"}
            width={578}
            height={732}
          />
        </div>
      </section>
      <section className="p-4 lg:p-8 w-full bg-[#fff]">
        <ImageSlider />
      </section>
      <Link href="/resume">Resume</Link>
    </main>
  );
}
