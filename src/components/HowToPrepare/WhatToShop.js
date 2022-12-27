import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const WhatToShop = () => {
  const [porsion, setPorsion] = React.useState(2);

  const handleChange = (event) => {
    setPorsion(event.target.value);
  };

  return (
    <div className="w-full px-2 lg:px-12 md:px-6 py-2 flex flex-col ">
      <div className="w-full flex justify-between text-start py-2 ">
        <h1 className="font-medium text-[24px] leading-none ">
          What to <h1>shop</h1>
        </h1>
        <div className="flex ">
          <h2 className="flex justify-center items-center px-3">
            No of portions
          </h2>
          <FormControl sx={{ height: 50, width: 60 }}>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select"
              value={porsion}
              onChange={handleChange}
              className="ml-1"
              defaultValue={2}
            >
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex py-4 font-medium text-lg ">
        <h1>Chicken</h1>
      </div>
      <div className="bg-zinc-100 w-full flex py-2 px-5 ">
        <p>250 g minced chicken</p>
      </div>
      <div className=" w-full flex py-2 px-5 ">
        <p>1 tbsp butter</p>
      </div>
      <div className="bg-zinc-100 w-full flex py-2 px-5 ">
        <p>1 sachet</p>
        <a href="/" className="underline font-medium ml-2">
          Santa Maria Chicken Taco Spice Mix
        </a>
      </div>
      <div className=" w-full flex py-2 px-5 ">
        <p>100 ml water</p>
      </div>
      <div className="w-full  flex flex-col  mb-4">
        <div className="flex py-4 font-medium text-lg ">
          <h1>Accessories</h1>
        </div>
        <div className="bg-zinc-100 w-full flex py-2 px-5 ">
          <p>1 packet</p>
          <a href="/" className="underline font-medium ml-2">
            Santa Maria Taco Shells 12-pack
          </a>
        </div>
        <div className=" w-full flex py-2 px-5 ">
          <p>sallad</p>
        </div>
        <div className="bg-zinc-100 w-full flex py-2 px-5 ">
          <p>tomato</p>
        </div>
        <div className=" w-full flex py-2 px-5 ">
          <p>avocado</p>
        </div>
        <div className="bg-zinc-100 w-full flex py-2 px-5 ">
          <p>grated cheese</p>
        </div>
        <div className=" w-full flex py-2 px-5 ">
          <p>1 jar</p>
          <a href="/" className="underline font-medium ml-2">
            Santa Maria Mango Papaya Salsa
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatToShop;
