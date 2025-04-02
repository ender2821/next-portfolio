import SiteButton from "./SiteButton"; // Replace with the correct path to SiteButton

export default function SecondaryCallToAction() {
  return (
    <div className="fixed bottom-7 w-full flex justify-end pr-8 z-40">
      <div className="relative xl:before:-left-[80vw] before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 xl:before:h-[1px] xl:before:w-[80vw] xl:before:border xl:before:border-dashed xl:before:border-t xl:before:border-blue before:z-20">
        <SiteButton href="/contact" selected={true}>
          Like What you See? Let's chat
        </SiteButton>
      </div>
    </div>
  );
}
