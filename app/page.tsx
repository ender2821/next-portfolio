import ImageSlider from "@/components/ImageSlider";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/queries/homeQueries";
import { PortableText } from "next-sanity";
import HomePageTitle from "@/components/HomePageTitle";
import HomeCtaButton from "@/components/HomeCtaButton";
import HomeGlacierImage from "@/components/HomeGlacierImage";
import HomeGlacier from "@/components/HomeGlacier";

export default async function Home() {
  const { data: home } = await sanityFetch({ query: HOME_QUERY, params: {} });
  console.log(home);
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="p-4 lg:p-8 lg:pb-0 relative w-full grid grid-cols-6 gap-4">
        <HomePageTitle />
        {home?.heroCTAButtonTxt ? (
          <HomeCtaButton heroCTAButtonTxt={home.heroCTAButtonTxt} />
        ) : null}
        {home?.heroTitle ? (
          <div className=" homeHeroTitle left-1/2 translate-x-[-50%] relative col-span-6 sm:col-span-3 md:mb-[10rem] lg:col-start-2 homeHero:mb-0 homeHero:max-w-[400px] homeHero:col-span-2 homeHero:col-start-3">
            <PortableText value={home.heroTitle} />
          </div>
        ) : null}
        <HomeGlacier
          imageUrl={home?.heroImage?.imageUrl ?? "/default-image.jpg"}
          imageName={home?.heroImage?.imageName ?? "default image description"}
        />
      </section>
      <section className="p-4 lg:p-8 w-full bg-[#fff]">
        <ImageSlider />
      </section>
      <Link href="/resume">Resume</Link>
    </main>
  );
}
