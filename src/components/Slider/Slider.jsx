import { useState,useEffect, createContext } from "react";
import PropTypes from 'prop-types';
import { getImages } from "apiServices";
import Arrows from "components/Arrows/Arrows";
import Dots from "components/Dots/Dots";
import SlidesList from "components/SlidesList/SlidesList";
import { SliderContainer } from "./Slider.styled";

export const SliderContext = createContext();




const Slider=({width,height,autoPlay,autoPlayTime})=>{

    const [items, setItems] = useState([]);
    const [slide, setSlide] = useState(0);
    const [touchPosition,setTouchPosition]=useState(null);

    useEffect(() => {
        const loadData = async () =>{
            const images = await getImages();
            console.log(images)
            setItems(images)
        }
        loadData();
    }, []);

    const changeSlide = (direction=1)=>{
        let slideNumber = 0;
        if (slide + direction < 0) {
            slideNumber = items.length - 1;
          } else {
            slideNumber = (slide + direction) % items.length;
          }
        setSlide(slideNumber);
    }
    const goToSlide = (number) => {
        setSlide(number % items.length);
      };
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
    
        setTouchPosition(touchDown);
    }
    const handleTouchMove = (e) => {
        if (touchPosition === null) {
          return;
        }
        const currentPosition = e.touches[0].clientX;
        console.log(currentPosition)
        const direction = touchPosition - currentPosition;
        console.log(direction)
    
    if (direction > 10) {
        changeSlide(1);
      }
  
      if (direction < -10) {
        changeSlide(-1);
      }
  
      setTouchPosition(null);
    }

    useEffect(() => {
        if (!autoPlay) return;
    
        const interval = setInterval(() => {
          changeSlide(1);
        }, autoPlayTime);
    
        return () => {
          clearInterval(interval);
        };
      }, [autoPlayTime,autoPlay]);
    return (
     <SliderContainer
        style={{ width, height }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        >
        <SliderContext.Provider
          value={{
            goToSlide,
            changeSlide,
            slidesCount: items.length,
            slideNumber: slide,
            items,
          }}
        >
          <SlidesList />
          <Arrows />
           <Dots />
        </SliderContext.Provider>
      </SliderContainer>
    )
}
Slider.propTypes = {
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string
  };
  
  Slider.defaultProps = {
    autoPlay: false,
    autoPlayTime: 5000,
    width: "100%",
    height: "100%"
  };
  
export default Slider;