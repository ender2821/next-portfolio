import Image from "next/image";
import { Contact } from "@/__sanity-generated__/types";
import ContactForm from "./ContactForm";

interface ContactSectionProps extends Contact {
  image: { imageUrl: string | null; imageName: string | null };
}

export default function ContactSection(props: ContactSectionProps) {
  const { contactSectionTitle, image, contactSectionSubtitle } = props;

  return (
    <section
      className={`services-section bg-white relative grid grid-cols-6 gap-x-4 px-4 pt-16 lg:pt-0 md:px-8`}
    >
      <div className="hidden sm:flex sectionMtnLeftWhite absolute left-0 top-0 -translate-y-1/2 z-30" />
      <div className="lg:h-[10rem] lg:grid lg:grid-cols-6 lg:gap-x-4 col-span-6">
        <div className="lg:border-l lg:border-l-white-border lg:col-start-3 lg:col-span-4" />
      </div>
      <div className="col-span-6 lg:grid lg:grid-cols-6 lg:gap-x-4 border-t-white-border border-b-white-border border-t border-b">
        <div className="hidden col-span-2 justify-center text-white-decoration font-normal lg:flex items-center text-xs">
          43px
        </div>
        <h2 className="mb-0 lg:border-l-white-border lg:border-l lg:col-span-4 lg:col-start-3 text-[3rem] before:hidden after:hidden text-black-bg leading-[2rem] lg:text-[3.75rem] lg:leading-[2.55rem]">
          {contactSectionTitle ?? ""}
        </h2>
      </div>
      <div className="relative col-span-6 py-8 md:pr-8 lg:pr-0 md:mb-8 md:col-span-2 items-center justify-center flex">
        <div className="w-[300px]">
          <Image
            src={image?.imageUrl ?? ""}
            alt={image?.imageName ?? ""}
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="col-span-6 md:col-span-4 md:pt-4 md:border-l-white-border md:border-l lg:pb-[10rem] lg:max-w-[600px]">
        {contactSectionSubtitle && (
          <h3 className="text-[1.25rem] lg:text-[1.5rem] w-[calc(100%-2rem)] normal-case mb-8">
            {contactSectionSubtitle}
          </h3>
        )}
        <ContactForm />
      </div>
    </section>
  );
}
