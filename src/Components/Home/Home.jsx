import React from "react";
import SimpleSlider from "../slider/SimpleSlider";
import Slider from "../slider/CardSlider";
import CardSlider from "../slider/CardSlider";


const Home = () => {
  return ( 
  <>
    <SimpleSlider/>
  <div className="w-[80%] md:w-[40%] md:mx-auto mt-2">
    <h2 className="text-center md:px-28 text-white bg-[red] rounded-[5px] py-[2px] font-[600] uppercase ">Reorder</h2>
  </div>
  <div className="w-[80%] mx-auto py-4 mb-8">
    <h1 className="text-white md:text-[30px] font-[700] uppercase">Explore Menu</h1>
    <p className="w-20 h-[3px] bg-[red]"></p>
  </div>
  <CardSlider/>
  
  </>
  );
};

export default Home;
