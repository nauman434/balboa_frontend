import React from "react";
import { choose } from "../Asset";
import { layout } from "../style";

const Choose_Sec = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={choose} alt="" className="w-[100%] h-[100%] relative " />
      </div>
      <div
        className={`${layout.sectionInfo} flex ss:items-start items-center `}
      >
        <h1 className="ss:text-[64px] text-[24px] font-tinos font-bold sm:text-start text-center">
          About <span className="text-secondary"> Balboa </span>{" "}
        </h1>
        <p className="ss:text-[16px] text-[14px] text-light_text leading-10 lg:w-[830px] w-full sm:text-start text-center tracking-wider">
          Balboa Trade & Shipping maintains exclusive channel partner
          relationships with superior trade finance and shipping partners
          servicing industrial and commercial entities as well as private
          individuals. Consultation for our services are free and invoiced only
          upon successfully executed transactions. Our goal is to ensure our
          clients gain greater leverage in commercial and industrial markets
          with key financing and shipping partners where the end result equates
          to significant savings, ease of business and greater opportunities to
          expand and grow. Contact us today for a free consultation.
        </p>
      </div>
    </section>
  );
};

export default Choose_Sec;
