import Image from "next/image";
import { isEven } from "@/helpers";

interface WorkPageThumbnailProps {
  activeThumbnail: { index: number; url: string; name: string } | null;
  image: { imageUrl: string; imageName: string };
  index: number;
  evenIndex: number;
  setActiveThumbnail: (thumbnail: {
    index: number;
    url: string;
    name: string;
  }) => void;
}

export default function WorkPageThumbnail(props: WorkPageThumbnailProps) {
  const { activeThumbnail, setActiveThumbnail, image, index, evenIndex } =
    props;
  return (
    <div
      key={index}
      className={`${activeThumbnail?.index !== index ? "hover:scale-105 hover:shadow-shadow-image-mobile" : ""} w-full aspect-square flex items-center flex-shrink-0 flex-grow-0 flex-[calc(50%-0.5rem)] relative transition duration-200 ease-in-out`}
    >
      <button
        onClick={() =>
          setActiveThumbnail({
            index: index,
            url: image?.imageUrl,
            name: image?.imageName,
          })
        }
        aria-label={`${image?.imageName} image`}
        className={`${activeThumbnail?.index === index ? "cursor-default pointer-events-none" : ""} w-full h-full`}
      >
        {activeThumbnail?.index === index && (
          <div
            className={`${isEven(evenIndex) ? "xl:before:-left-[60vw]" : "xl:before:-right-[60vw]"} border border-dashed border-blue absolute top-0 left-0 bottom-0 right-0 z-10 before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 xl:before:h-[1px] xl:before:w-[60vw] xl:before:border xl:before:border-dashed xl:before:border-t xl:before:border-blue before:z-20`}
          >
            <span className="topLeftBlueHandle" />
            <span className="topRightBlueHandle" />
            <span className="bottomLeftBlueHandle" />
            <span className="bottomRightBlueHandle" />
          </div>
        )}
        <Image
          src={image?.imageUrl ?? "/default-image.jpg"}
          alt={image?.imageName ?? ""}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-cover"
        />
      </button>
    </div>
  );
}
