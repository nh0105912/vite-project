import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const items = [
    {
      name: "promotion",
      img: "./cart1.png",
    },
    {
      name: "Every day Value",
      img: "./cart2.png",
    },
    {
      name: "promotion",
      img: "./cart3.png",
    },
    {
      name: "sharing",
      img: "./cart4.png",
    },
    {
      name: "promotion",
      img: "./cart5.png",
    },
    {
      name: "sharing",
      img: "./cart4.png",
    },
    {
      name: "promotion",
      img: "./cart5.png",
    },
   
  ];
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="w-3/4 m-auto ">
           <Slider {...settings} >
          {items.map((item)=>(
            <div className="relative bg-[#1C1816] md:w-[180px] h-[190px] my-8 rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] hover:translate-y-[-14px] duration-200 ease-in-out hover:cursor-pointer">
              <img src={item.img} alt=""  className="w-[60%]  md:w-full block m-auto px-2 md:py-2"/>
              <p className="md:px-6 text-center text-white">{item.name}</p>
              <p className="w-12 h-1 block mx-auto bg-red-500 "></p>
            </div>
          ))}
          </Slider>
      </div>
    </>
  );
};

export default CardSlider;
