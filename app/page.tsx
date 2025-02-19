import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/queries/homeQueries";
import { PortableText } from "next-sanity";
import HomePageTitle from "@/components/HomePageTitle";

export default async function Home() {
  const { data: home } = await sanityFetch({ query: HOME_QUERY, params: {} });
  console.log(home);
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-24">
      <section>
        <HomePageTitle />
        {home?.heroCTAButtonTxt ? (
          <Link href="/contact">{home.heroCTAButtonTxt}</Link>
        ) : null}
        {home?.heroTitle ? <PortableText value={home.heroTitle} /> : null}
      </section>
      <ImageSlider />
      <Link href="/resume">Resume</Link>
    </main>
  );
}
