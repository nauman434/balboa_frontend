import React from "react";
import { choose } from "../Asset";
import { layout } from "../style";

const Choose_Sec = () => {
  return (
    <section >
      <div className={`${layout.sectionReverse} ss:mt-12 mt-0 ss:mb-10 mb-0`}>
        <div className={layout.sectionImgReverse}>
          <img src={choose} alt="" className="w-[80%] h-[100%] relative " />
        </div>
        <div
          className={`${layout.sectionInfo} flex ss:items-start items-center `}
        >
          <h1 className="ss:text-[64px] text-[24px] font-tinos font-bold sm:text-start text-center">
            Why Choose<span className="text-secondary"> Balboa</span>
          </h1>
          <p className="ss:text-[16px] text-[14px] text-light_text leading-10 lg:w-[830px] w-full sm:text-start text-center tracking-wider">
            Our customers are some of the few on the planet that were able to
            outthink their local market limitations and restrictions. When you
            access our trade banking relationships you are able to get ahead of
            your competition with less capital investment and stronger
            contracts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Choose_Sec;
