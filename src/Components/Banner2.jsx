import React from "react";
import styles from "../style";

const Banner2 = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY}   w-full `}>
      <div className="ss:mt-10 mt-0  ss:mb-10 mb-0">
        <div className="flex sm:flex-row flex-col flex-wrap  sm:justify-between justify-center  w-full p-12  items-centers">
          <h1 className="font-tinos text-black  sm:text-[50px] text-[32px] font-bold sm:text-start text-center">
            Shipping Fulfillment
          </h1>
          <h2 className="font-tinos text-black  sm:text-[30px] text-[20px] sm:w-[430px] w-full sm:text-start text-center">
            Parcel Postage, Freight Discounts & Fulfillment Solutions
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
