import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { yellow } from "@mui/material/colors";

const Shoppingmater = ({OrderName ,OrderSize,OrderDimension}) => {

  const [checked, setChecked] = React.useState(false);
  const handleChange =()=>{
      setChecked(!checked)
  }
  console.log({checked});


  return (
    <div className="flex w-full border border-l-0  py-2">
      <div className="w-full flex justify-between">
        <div className="flex">
          <Checkbox
          checked={checked}
          onChange={handleChange}
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 28 },
              "&.Mui-checked": {
                color: yellow[600],
              },
            }}
          />
          <a href="/" className="flex items-center text-start">
            <h1 className={`${checked ? "line-through flex items-center   " : "flex items-center  underline lg:text-lg text-base"} " " `}>
              {OrderName}
            </h1>
          </a>
        </div>
      </div>

      <div className="flex items-center">
        <p className="lg:text-xl font-medium px-3">{OrderSize}</p>
        <p className="lg:text-lg font-medium pl-2 pr-2">{OrderDimension}</p>
      </div>
    </div>
  );
};

export default Shoppingmater;
