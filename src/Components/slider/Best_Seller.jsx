import React from "react";

const Best_Seller = () => {
  const cards = [
    {
      span: "",
      text: "Krunch Burger",
      price: "rs 310",
      img: "./item1.png",
    },
    {
      span: "",
      text: "Chicken & Chips",
      price: "rs 590",
      img: "./item2.png",
    },
    {
      span: "",
      text: "Hot Wings Bucket",
      price: "rs 610",
      img: "./item3.png",
    },
    {
      span: "",
      text: "Mighty Zinger",
      price: "rs 650",
      img: "./item4.png",
    },
    {
      span: "",
      text: "Krunch Combo",
      price: "rs 720",
      img: "./item5.png",
    },
  ];
  return (
    <>
     <div className="w-3/4 mx-auto my-10 overflow-x-auto scrollbar-thin-gray">
  <div className="flex gap-3 w-max">
    {cards.map((item, index) => {
      return (
        <div
          key={index}
          className="w-[340px] bg-[#1C1816]  flex-shrink-0"
        >
        
          <div className="flex justify-center items-start gap-2 ">
            <p className="w-6 h-8 bg-red-500"></p>
            <p className="w-6 h-8 bg-red-500"></p>
            <p className="w-6 h-8 bg-red-500"></p>
          </div>

        
          <div className="mt-4 px-2">
            <h2 className="text-white capitalize font-bold text-2xl">
              {item.text}
            </h2>
          </div>

          <div className="block float-right w-20 bg-red-500 mt-3">
            <p className="text-white px-2 py-1 flex justify-end">
              {item.price}
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <img
              src={item.img}
              alt={item.text}
              className="w-52 h-52 object-cover block mx-auto"
            />
          </div>
        </div>
      );
    })}
  </div>
</div>

    </>
  );
};

export default Best_Seller;
