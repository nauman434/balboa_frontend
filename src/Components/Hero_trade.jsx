import React from "react";
import { hero } from "../Asset";
import styles, {layout} from "../style";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Hero_trade = () => {
  return (
    <section className={layout.sectionReverse}>
      
      <div className={`${layout.sectionInfo} flex md:items-start items-center md:justify-center justify-start`}>
        <h1 className="ss:text-[64px] text-[24px] md:text-start text-center text-white font-tinos font-bold">Shipping Fulfillment <span className='text-secondary'>Leverage</span> </h1>
        <p className="ss:text-[16px] text-[14px] text-white leading-10 md:text-start text-center tracking-wider ss:w-[480px] w-[330px] mb-5">Our clients are importers and trading companies that utilize our services to expand their business by leveraging their existing cash-flow.</p>
        <Link to={"/contact-us"}><button  className="btn bg-secondary w-[170px] text-[16px] ">Contact Us</button></Link>
      </div>
      <div className={layout.sectionImgReverse}>
        <img src={hero} alt="" className="w-[100%] h-[100%] relative z-[5] md:flex hidden" />
      </div>
      
    </section>
    
  );
};

export default Hero_trade;
