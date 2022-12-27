import React from "react";
import HowToPrepareMatter from "./HowToPrepareMatter";

import WhatToShop from "./WhatToShop";

const HowToPrepare = () => {
  return (
    <div className="bg-[#CFD1CC] w-full flex justify-center items-center py-3 px-">
      <div className="lg:w-4/5 xl:w-3/4  w-full bg-white flex  lg:flex-row  flex-col">
        <WhatToShop />
        <HowToPrepareMatter/>
      </div>
    </div>
  );
};

export default HowToPrepare;
