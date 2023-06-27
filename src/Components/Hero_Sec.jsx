import React from "react";
import { Link } from "react-router-dom";
import { hero } from "../Asset";
import styles, { layout } from "../style";

const Hero_Sec = () => {
  return (
    <section className={`${styles.paddingY} ${layout.sectionReverse}`}>
      <div className={`${layout.sectionReverse} ss:mt-12 mt-0 ss:mb-10 mb-0`}>
        <div className={layout.sectionImgReverse}>
          <img
            src={hero}
            alt=""
            className="w-[70%]  relative z-[5] md:flex hidden"
          />
        </div>
        <div
          className={`${layout.sectionInfo} flex md:items-start items-center md:justify-center justify-start`}
        >
          <h1 className="ss:text-[64px] text-[24px] md:text-start text-center text-white font-tinos font-bold">
            Shipping Fulfillment{" "}
            <span className="text-secondary">Leverage</span>
          </h1>
          <p className="ss:text-[16px] text-[14px] text-white leading-10 md:text-start text-center tracking-wider ss:w-[480px] w-[330px] mb-5">
            Utilize our group contracts to leverage the purchasing power of
            collective businesses to negotiate better pricing, service and
            account representation from suppliers. Increase your buying power,
            while simplifying the buying process.
          </p>
          <Link to={"/shipping-fulfillment"}>
            <button className="btn bg-secondary w-[170px] text-[16px] ">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero_Sec;
