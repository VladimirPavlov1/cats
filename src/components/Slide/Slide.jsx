import SlideImage from "components/SlideImage/SlideImage";
import SlideTitle from "components/SlideTitle/SlideTitle";
import { SlideWrap } from "./Slide.styled";


export default function Slide({data:{ largeImageURL, tags }}) {

  return (
      <SlideWrap >
        <SlideImage src={largeImageURL} alt={tags} />
        <SlideTitle title={tags} />
      </SlideWrap>
    );
  }