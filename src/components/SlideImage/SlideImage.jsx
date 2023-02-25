import { Image } from "./SlideImage.styled";

export default function SlideImage({ src, alt }) {
    return <Image src={src} alt={alt} />;
  }