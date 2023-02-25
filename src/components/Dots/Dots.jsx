import { useContext } from "react";
import { SliderContext } from "components/Slider/Slider";
import Dot from "components/Dot/Dot";

const Dots =()=>{
  const {slidesCount}=useContext(SliderContext);

  const renderDots = ()=>{
    const dots=[];
    for (let i=0;i<slidesCount;i+=1){
        dots.push(<Dot key={`dot-${i}`} number={i} />);
    }
    return dots;
  }

    return (
        <div>
            {renderDots()}
        </div>
    )
}

export default Dots;