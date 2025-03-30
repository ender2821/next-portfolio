import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/queries/homeQueries";
import { PortableText, PortableTextReactComponents } from "next-sanity";
import HomePageTitle from "@/components/HomePageTitle";
import HomeCtaButton from "@/components/HomeCtaButton";
import HomeGlacier from "@/components/HomeGlacier";
import HomeImageSliders from "@/components/HomeImageSliders";
import HomeServices from "@/components/HomeServices";
import { ServiceCategory } from "@/__sanity-generated__/types";
import TiltImage from "@/components/TiltImage";
import Image from "next/image";
import SiteButton from "@/components/SiteButton";

export default async function Home() {
  const { data: home } = await sanityFetch({ query: HOME_QUERY, params: {} });
  const aboutComponents: Partial<PortableTextReactComponents> = {
    block: {
      normal: ({ children }) => {
        return <p className="last-of-type:mb-0 text-black-bg">{children}</p>;
      },
    },
  };
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="px-4 pb-8 pt-4 lg:pt-8 sm:pb-0 lg:p-8 lg:pb-0 relative grid grid-cols-6 gap-4 w-full">
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
      <section className="pt-4 sm:pt-16 sm:pb-8 lg:pt-0 lg:pb-[8rem] w-full bg-[#fff] relative">
        <div className="px-4 lg:pl-8 lg:pr-8 md:pb-8 overflow-hidden">
          <div className="sectionMtnLeftWhite absolute left-0 top-0 -translate-y-1/2" />
          <div
            className={
              "hidden lg:flex lg:h-[10rem] items-center justify-center relative text-white-decoration"
            }
          >
            <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-[10rem] bg-white-border z-0"></span>
            <span className="bg-white z-10 text-xs">160px</span>
          </div>
          <h2 className="mt-8 sm:mt-0 lg:mb-0 text-right">Work</h2>
          {home?.workGallery && home?.workGallery.length > 0 ? (
            <HomeImageSliders
              images={home?.workGallery}
              button={home?.workCTAButtonTxt ?? ""}
            />
          ) : null}
        </div>
      </section>
      <section className="px-4 py-4 pt-8 sm:pt-16 sm:pb-16 lg:px-8 lg:pt-[10rem] lg:pb-[10rem] relative grid grid-cols-6 gap-x-4 w-full">
        <div className="sectionMtnRightBlack absolute right-0 top-0 -translate-y-1/2" />
        <h2 className="lg:mb-8 text-white col-span-6 xl:grid-col-span-5 xl:col-start-2 before:bg-black-decoration after:bg-black-decoration">
          Services
        </h2>
        {home?.serviceCTAButtonTxt ? (
          <SiteButton
            href="/contact"
            textHover="light"
            className="max-h-[3.5rem] md:px-[1rem] col-span-6 sm:col-span-2 xl:col-span-1 xl:col-start-2 sm:m-0 siteButton shadow-shadow-button-right w-full sm:w-auto mt-8 mb-8 order-2 lg:-order-none"
          >
            {home?.serviceCTAButtonTxt}
          </SiteButton>
        ) : null}
        <HomeServices
          categories={home?.serviceHomeCategories as ServiceCategory[]}
        />
      </section>
      <section
        className="pt-4 sm:pt-0 sm:pb-8 lg:pt-0 lg:pb-0 w-full bg-[#fff] relative"
        id="#about"
      >
        <div className="sectionMtnRightWhite absolute right-0 top-0 -translate-y-1/2" />
        <div className="hidden md:grid absolute z-0 grid-cols-6 w-[100%] h-[100%] gap-4 pl-4 pr-4 lg:pl-8 lg:pr-8">
          <span className="border-white-border border-r h-[100%] relative" />
          <span className="border-white-border border-l border-r h-[100%] relative" />
          <span className="border-white-border border-l border-r h-[100%] relative" />
          <span className="border-white-border border-l border-r h-[100%] relative" />
          <span className="border-white-border border-l border-r h-[100%] relative" />
          <span className="border-white-border border-l h-[100%] relative" />
        </div>
        <div className="px-4 lg:pl-8 lg:pr-8 md:pb-8 grid grid-cols-6 gap-4 relative">
          <div className="col-span-6 sm:col-span-3 sm:top-[-2rem] lg:col-span-2 lg:row-span-2 relative grid grid-cols-2 gap-8">
            <TiltImage
              className={"z-10 col-span-2 sm:w-[calc(100%-4rem)]"}
              shadow={"right"}
            >
              <Image
                src={home?.aboutImage?.imageUrl ?? "/default-image.jpg"}
                alt={home?.aboutImage?.imageName ?? "default image description"}
                width={900}
                height={1200}
                style={{ objectFit: "contain", width: "100%" }}
              />
            </TiltImage>
            <pre className="text-xs text-white-decoration lg:col-span-2 z-0">
              {`if (isManualInputIgnoreOtherInputs) {
  this.tiltAngleX = tiltAngleXManual !== null ? tiltAngleXManual! : 0;
  this.tiltAngleY = tiltAngleYManual !== null ? tiltAngleYManual! : 0;
  wrapperElClientPosition.xPercentage = (100 * this.tiltAngleX) / tiltMaxAngleX!;
  wrapperElClientPosition.yPercentage = (100 * this.tiltAngleY) / tiltMaxAngleY!;
}`}
            </pre>
          </div>
          <div className="lg:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 col-span-6 sm:col-span-3 lg:col-span-4 lg:gap-4 lg:pt-[10rem] relative sm:pt-16">
            <h2 className="lg:mb-0 text-right col-span-6 md:col-span-3 lg:col-span-4 lg:-ml-[6rem] lg:w-[calc(100%+6rem)]">
              Meet Josh
            </h2>
            {home?.aboutSubtitle ? (
              <h3 className="col-span-4 lg:mb-0 lg:col-span-2 lg:col-start-3 xl:col-start-2 pb-4 position ">
                {home?.aboutSubtitle}
              </h3>
            ) : null}
            <div className="hidden xl:block lg:col-start-4 lg:hidden"></div>
            <PortableText
              value={home?.aboutContent ? home?.aboutContent : []}
              components={aboutComponents}
            />
            <div className="pb-8 sm:pb-0 col-start-1 pt-4 lg:pt-0 flex flex-col gap-3 col-span-2 xl:col-span-1 lg:row-start-3 items-center">
              <SiteButton
                href="/resume"
                className="siteButton w-[100%] relative"
              >
                <span className="z-10 relative">Resume</span>
              </SiteButton>
              <span className="w-8 h-[1px] bg-white-decoration" />
              {home?.aboutGithub ? (
                <SiteButton
                  href={home?.aboutGithub}
                  className="siteButton w-[100%]"
                >
                  Visit my Github
                </SiteButton>
              ) : null}
              <span className="w-8 h-[1px] bg-white-decoration" />
              {home?.aboutLinkedIn ? (
                <SiteButton
                  href={home?.aboutLinkedIn}
                  className="siteButton w-[100%]"
                >
                  Visit my Linkedin
                </SiteButton>
              ) : null}
              <span className="w-8 h-[1px] bg-white-decoration" />
              <SiteButton href="/contact" className="siteButton w-[100%]">
                Reach Out
              </SiteButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
