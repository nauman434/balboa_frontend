import React from "react";



const Banner = () => {
  return (
    <section>
      <div  className="flex sm:flex-row flex-col flex-wrap  sm:justify-between justify-center  w-full p-12  items-centers">
        <h1 className="font-tinos text-secondary sm:text-[50px] text-[32px] font-bold sm:text-start text-center">Trade Finance</h1>
        <h2 className="font-tinos text-secondary sm:text-[30px] text-[20px] sm:w-[430px] w-full sm:text-start text-center">Import/Export Letters of Credit & Offshore Payment Solutions</h2>
      </div>
      
    </section>
  );
};

export default Banner;

// flex sm:flex-row flex-col flex-wrap  sm:justify-between justify-center bg-section w-full p-12 rounded-[50px] items-centers