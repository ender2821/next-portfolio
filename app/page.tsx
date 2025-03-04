import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/queries/homeQueries";
import { PortableText } from "next-sanity";
import HomePageTitle from "@/components/HomePageTitle";
import HomeCtaButton from "@/components/HomeCtaButton";
import HomeGlacier from "@/components/HomeGlacier";
import HomeImageSliders from "@/components/HomeImageSliders";

export default async function Home() {
  const { data: home } = await sanityFetch({ query: HOME_QUERY, params: {} });
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
          glacierSubtitle={home?.meetGlacierSubtitle ?? ""}
          glacierContent={
            home?.meetGlacierContent ? home?.meetGlacierContent : []
          }
          glacierGallery={home?.glacierGallery ? home?.glacierGallery : []}
          meetGlacierButtonCTA={home?.meetGlacierButtonCTA ?? ""}
        />
      </section>
      <section className="p-4 lg:pr-8 lg:pl-8 lg:pt-0 w-full bg-[#fff]">
        <div
          className={
            "hidden lg:flex lg:h-[10rem] items-center justify-center relative text-white-decoration"
          }
        >
          <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-[10rem] bg-white-border z-0"></span>
          <span className="bg-white z-10">160px</span>
        </div>
        <h2 className="text-right">Work</h2>
        {home?.workGallery && home?.workGallery.length > 0 ? (
          <HomeImageSliders images={home?.workGallery} />
        ) : null}
      </section>
      <Link href="/resume">Resume</Link>
    </main>
  );
}
