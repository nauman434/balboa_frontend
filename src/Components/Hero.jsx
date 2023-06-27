import React from "react";
import { Link } from "react-router-dom";
import { hero_trade } from "../Asset";
import { layout } from "../style";

function Hero({ isAuth }) {
  return (
    <section className={layout.sectionReverse}>
      <div className={`${layout.sectionReverse} ss:mt-12 mt-0 ss:mb-10 mb-0`}>
        <div
          className={`${layout.sectionInfo} flex md:items-start items-center md:justify-center justify-start`}
        >
          <h1 className="ss:text-[64px] text-[24px] md:text-start text-center text-white font-tinos font-bold">
            Trade Finance <span className="text-secondary">Leverage</span>
          </h1>
          <p className="ss:text-[16px] text-[14px] font-semibold text-white leading-10 md:text-start text-center tracking-wider ss:w-[480px] w-[330px] mb-5">
            Letters of Credit<span className="text-secondary"> • </span>Bank
            Guarantees<span className="text-secondary"> • </span>Performance
            Bonds
          </p>
          <p className="ss:text-[16px] text-[14px] text-white leading-10 md:text-start text-center tracking-wider ss:w-[480px] w-[330px] mb-5">
            Our clients are importers and trading companies that utilize our
            services to expand their business by leveraging their existing
            cash-flow.
          </p>
          <Link to={"/trade-finance"}>
            <button className="btn bg-secondary w-[170px] text-[16px] ">
              Learn More
            </button>
          </Link>
        </div>
        <div className={layout.sectionImgReverse}>
            <img
              src={hero_trade}
              alt=""
              className="w-[70%] items-center md:flex hidden relative z-[5] "
            />
          </div>
      </div>
    </section>
  );
}

export default Hero;
