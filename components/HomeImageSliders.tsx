import ImageSlider from "./ImageSlider";
import MobileImageSlider from "./MobileImageSlider";

interface HomeImageSlidersProps {
  images: any[];
  button: string;
}

export default function HomeImageSliders(props: HomeImageSlidersProps) {
  const { images, button } = props;

  return (
    <>
      <ImageSlider images={images} button={button} />
      <MobileImageSlider images={images} button={button} />
    </>
  );
}
