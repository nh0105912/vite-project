import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   
      
  };
  return (
    <div className="slider-container  md:overflow-hidden">
      <Slider {...settings}>
        
      
          <div className=" md:w-full md:object-cover ">
            <img src="./bg_1.jpg" alt="" className="md:w-full  object-cover md:h-[80vh]" />
          </div>
         <div className="md:w-full md:object-cover ">
            <img src="./bg-2.jpg" alt="" className="md:w-full object-cover md:h-[80vh] "/>
          </div>
         
      </Slider>
    </div>
  );
}

export default SimpleSlider;
