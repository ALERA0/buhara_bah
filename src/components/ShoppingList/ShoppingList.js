import React from "react";
import { BsPrinter } from "react-icons/bs";
import Checkbox from "@mui/material/Checkbox";
import { yellow } from "@mui/material/colors";
import Shoppingmater from "./Shoppingmater";
import ShoppingmatterwnoRouter from "./ShoppingmatterwnoRouter";

const ShoppingList = () => {
  return (
    <div className=" flex justify-center items-center  bg-[#CFD1CC] py-8 ">
      <div className="bg-white py-12 lg:px-28 px-2 md:w-4/5 flex justify-center items-center lg:w-2/3 text-[#0C022F] flex-col xl:w-1/2">
        <div className="w-full flex justify-between items-center">
          <h2 className="md:text-[30px] text-[26px] font-medium">Shopping list</h2>
          <button className="bg-[#090223] rounded-full p-3 hover:bg-[#05145F] ">
            <BsPrinter className="fill-white w-5 h-5" />
          </button>
        </div>

        <div className="flex w-full flex-col">
          <h2 className="flex w-full mt-10 text-xl font-medium mb-4">Bread</h2>
          <Shoppingmater
            OrderName="Santa Maria Taco Shells 12-pack"
            OrderSize="0.5"
            OrderDimension="packet"
          />
          <h2 className="flex w-full mt-10 text-xl font-medium mb-4">
            Butter & oil
          </h2>
          <ShoppingmatterwnoRouter
            OrderName="butter"
            OrderSize="2.5"
            OrderDimension="tbsp"
          />
          <ShoppingmatterwnoRouter
            OrderName="cooking oil"
            OrderSize="1"
            OrderDimension="tbsp"
          />
          <h2 className="flex w-full mt-10 text-xl font-medium mb-4">
            Chicken
          </h2>
          <ShoppingmatterwnoRouter
            OrderName="minced chicken "
            OrderSize="250"
            OrderDimension="g"
          />
          <ShoppingmatterwnoRouter
            OrderName="chicken breast fillet"
            OrderSize="0.5"
            OrderDimension="kg"
          />
          <h2 className="flex w-full mt-10 text-xl font-medium mb-4">
            Dairy, cheese & eggs
          </h2>
          <ShoppingmatterwnoRouter OrderName="grated cheese " />
          <ShoppingmatterwnoRouter
            OrderName="grated cheddar cheese"
            OrderSize="200"
            OrderDimension="g"
          />
          <h2 className="flex w-full mt-10 text-xl font-medium mb-4">
            Fish & seafood
          </h2>
          <ShoppingmatterwnoRouter
            OrderName="salmon fillet"
            OrderSize="1"
            OrderDimension="kg"
          />
          <h2 className="flex w-full mt-10 text-xl font-medium mb-4">
            Fruit & vegetables
          </h2>
          <ShoppingmatterwnoRouter OrderName="tomato" />
          <ShoppingmatterwnoRouter
            OrderName="avocado"
            OrderSize="1"
          />
          <ShoppingmatterwnoRouter
            OrderName="onion"
            OrderSize="1"
          />
          <ShoppingmatterwnoRouter
            OrderName="yellow pepper"
            OrderSize="1"
          />
          <ShoppingmatterwnoRouter
            OrderName="red pepper"
            OrderSize="1"
          />
          <ShoppingmatterwnoRouter
            OrderName="green pepper"
            OrderSize="1"
          />
          <ShoppingmatterwnoRouter
            OrderName="plum tomato"
          />
          <ShoppingmatterwnoRouter
            OrderName="red onions"
            OrderSize="2"
          />
          <ShoppingmatterwnoRouter
            OrderName="limes"
            OrderSize="2"
          />
          <ShoppingmatterwnoRouter
            OrderName="red chill"
            OrderSize="1"
          />
          <ShoppingmatterwnoRouter
            OrderName="green chillies"
            OrderSize="2"
          />
          <ShoppingmatterwnoRouter
            OrderName="cucumber"
          />
          <h2 className="flex w-full mt-10 text-xl font-medium mb-4">
          Salads & sides
          </h2> 
          <ShoppingmatterwnoRouter
            OrderName="salad leaf"

          />
          <h2 className="flex w-full mt-10 text-xl font-medium mb-4">
          Herb
          </h2> 
          <ShoppingmatterwnoRouter
            OrderName="coriander"
            OrderSize="2"
            OrderDimension="pots"
          />
          <h2 className="flex w-full mt-10 text-xl font-medium mb-4">
          Other
          </h2>
          <Shoppingmater
            OrderName="Santa Maria Chicken Taco Spice Mix"
            OrderSize="0.5"
            OrderDimension="sache"
          />
          <ShoppingmatterwnoRouter
            OrderName="water"
            OrderSize="0.5"
            OrderDimension="dl"
          />
          <ShoppingmatterwnoRouter
            OrderName="sallad"
          />
          <Shoppingmater
            OrderName="Santa Maria Mango Papaya Salsa"
            OrderSize="0.5"
            OrderDimension="jar"
          />
          <ShoppingmatterwnoRouter
            OrderName="Santa Maria Medium Fajita Seasoning Mix"
            OrderSize="1"
            OrderDimension="sache"
          />
          <Shoppingmater
            OrderName="Santa Maria Plain Flour Soft Tortillas"
            OrderSize="8"
          />
          <ShoppingmatterwnoRouter
            OrderName="salt"
            OrderSize="1"
            OrderDimension="tsp"
          /> 
          <ShoppingmatterwnoRouter
            OrderName="tortilla chips"
            OrderSize="1"
            OrderDimension="packet"
          /> 
          <ShoppingmatterwnoRouter
            OrderName="chopped tomato"
            OrderSize="100"
            OrderDimension="g"
          /> 
          <Shoppingmater
            OrderName="Santa Maria Taco Seasoning Mix"
            OrderSize="2"
            OrderDimension="sache"
          />
          <Shoppingmater
            OrderName="Santa Maria Plain Flour Mini Soft Tacos"
            OrderSize="2"
            OrderDimension="packet"
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
