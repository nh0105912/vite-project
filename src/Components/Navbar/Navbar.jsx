import React from "react";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <div className="md:flex justify-between py-4 md:px-12 ">
        <div className=" md:flex  justify-center  gap-4">
          <div className=" flex justify-evenly md:flex md:items-center md:gap-2">
            <RiMenu2Line className="text-white text-[30px]" />
            <img src="./kfc_logo.png" alt="" />
          </div>
          <div className="flex justify-evenly  md:flex items-center gap-4 ">
            <div className="flex justify-evenly items-center gap-2 border-[2px] rounded-[5px] border-[red] bg-[#1C1816]     px-4 py-2">
              <img src="./Delivery.png" alt="" className="w-6 h-6" />
              <p className="text-white uppercase font-bold">Delivery</p>
            </div>
            <div className="flex justify-center  items-center gap-2 rounded-[5px] bg-[#1C1816] px-4 py-2">
              <img src="./pickup.png" alt="" className="w-6 h-6" />
              <p className="text-white uppercase font-bold h">pickup</p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center gap-2 ">
        
            <img src="./bucket.png" alt="" className="w-6 h-6" />
            <button className="text-white bg-[red] px-4 py-2 rounded-[5px] uppercase font-bold ">
              Login{" "}
            </button>
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
