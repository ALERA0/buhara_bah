import React from "react";
import ProductImg from "../../assets/Product.svg";


const Product = () => {
  return (
    <div className=" flex justify-center items-center py-10 bg-[#CFD1CC] ">
      <div className=" lg:w-5/6 h-full w-full py-5  flex lg:flex-row flex-col  ">
        <div className=" lg:h-[650px]  lg:w-[650px]  lg:pt-36 pt-20  mx-auto mb-20 lg:mb-0 ">
          <img src={ProductImg} alt="" className="mx-auto  lg:w-80 w-52" />
        </div>
        <div className="bg-white lg:px-16 px-4 py-10 flex flex-col lg:w-[600px] w-full flex-wrap ">
          <div>
            <h1 className="lg:text-[55px] text-[30px]  leading-tight text-start text-[#000231] ">
              Tortilla Chips Salted 185Gx15
            </h1>
          </div>
          <div className="pt-5 pb-2">
            <p className="text-start text-[18px]   font-medium ">
              Tortilla Chips Salted are lightly salted corn chips with a
              triangular shape. They're perfect for dipping in Salsa.
            </p>
          </div>
          <div>
            <p className="text-start">
              Store cool and dry. After opening reseal and use within 1 week.
            </p>
          </div>
          <div className="text-start pt-8 text-2xl font-semibold">
            <h2>Available to buy at:</h2>
          </div>
          <div className="flex py-3 ">
            <button className="bg-[#218E6A] #218E6A ml-3 py-4 text-white uppercase px-8 hover:bg-[#66BDA0] ">
              Ocado
            </button>
          </div>
          <div className="flex pt-3">
            <a href="/" className="underline text-2xl font-medium text-start">
              Santa Maria Online Store
            </a>
          </div>
          <div className="flex pt-3  text-lg">
            <h2 className="font-medium">Ingredients</h2>
          </div>
          <div className="flex pt-1 text-lg">
            <p>Corn flour (79%), sunflower oil , salt.</p>
          </div>
          <div className="flex pt-5 pb-3 text-lg">
            <h2 className="font-medium">Nutritional Information Per 100 g</h2>
          </div>
          <div className="flex flex-col text-start text-lg ">
            <p className="pt-1">Energy (kJ)/(kcal): 2025 / 484</p>
            <p className="pt-1">Fat: 20,0 g</p>
            <p className="pt-1 ml-4">of which saturated fat: 1,6 g</p>
            <p className="pt-1">Carbohydrate: 64,0 g</p>
            <p className="pt-1 ml-4">of which sugar: 0,8 g</p>
            <p className="pt-1">Fibre: 5,4 g</p>
            <p className="pt-1">Protein: 6,3 g</p>
            <p className="pt-1">Salt: 1,50 g</p>
          </div>
          <div className="flex pt-4 text-lg flex-col text-start">
            <h2 className="font-medium">Package size</h2>
            <p>185 g</p>
          </div>
          <div className="flex flex-wrap text-start pt-3">
            <p>
              Nutritional information and table of contents may differ slightly
              on the website. Always refer to the packaging for correct
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
