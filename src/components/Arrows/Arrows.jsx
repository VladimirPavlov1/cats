import { useContext } from "react";
import { SliderContext } from "components/Slider/Slider";
import {ArrowsContainer,Left,Right} from "./Arrows.styled"
import {BsArrowLeft} from "react-icons/bs";
const Arrows=()=>{

    const {changeSlide}=useContext(SliderContext);


    return (
        <ArrowsContainer>
            <Left onClick={() => changeSlide(-1)} />
            <Right onClick={() => changeSlide(1)} />
        </ArrowsContainer>
    )
}
export default Arrows;