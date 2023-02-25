import { useContext } from "react";
import { SliderContext } from "components/Slider/Slider";
import Slide from "components/Slide/Slide";
import { SlideListWrap } from "./SlidesList.styled";

export default function SlidesList() {
    const { slideNumber, items } = useContext(SliderContext);
   
    return (
      <SlideListWrap
        style={{ transform: `translateX(-${slideNumber * 100}%)` }}
      >
        {items.map((slide, index) => (
           
          <Slide key={index} data={slide} />
        ))}
      </SlideListWrap>
    );
  }