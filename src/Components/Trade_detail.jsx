import axios from "axios";
import React, { useEffect, useState } from "react";
import { layout } from "../style";

const Trade_detail = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://balboabackend-production-35f3.up.railway.app/trade-finance")
      .then((res) => {
        console.log(res.data[0]);
        setDetails(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section className="flex flex-col">
      <div
        className={`${layout.sectionReverse} sm:items-start items-center p-10 bg-section mt-32`}
      >
        <div id="first" className={`${layout.sectionInfo} flex  `}>
          <h1 className="ss:text-[64px] text-[24px] font-tinos font-bold ">
            {details[0]?.title}
          </h1>
          <p className="ss:text-[16px] text-[14px] text-light_text leading-10 w-full  tracking-wider">
            {details[0]?.description}
          </p>
          <br />
        </div>
      </div>
      <div className="p-10 bg-section mb-10">
        <h1 className="ss:text-[24px] text-[18px]  font-bold ">
          Financial Bank Instrument Types and Uses
        </h1>
        <br />
        <p
          id="letter-of-credit"
          className="ss:text-[16px] text-[14px] text-light_text leading-10 w-full   tracking-wider"
        >
          <span className="font-bold mb-2 text-[18px] text-black">
            {details[1]?.title}:{" "}
          </span>
          {details[1]?.description}
        </p>
        <br />
        <p
          id="monetizing-sblc-&-bg"
          className="ss:text-[16px] text-[14px] text-light_text leading-10 w-full   tracking-wider"
        >
          <span className="font-bold mb-2 text-[18px] text-black">
            {details[2]?.title}:{" "}
          </span>
          {details[2]?.description}
        </p>
        <br />
        <p
          id="documentry-letter-of-credit"
          className="ss:text-[16px] text-[14px] text-light_text leading-10 w-full   tracking-wider"
        >
          <span className="font-bold mb-2 text-[18px] text-black">
            {details[3]?.title}:{" "}
          </span>
          {details[3]?.description}
        </p>
        <br />
        <p
          id="discounting-letters-of-credit"
          className="ss:text-[16px] text-[14px] text-light_text leading-10 w-full   tracking-wider"
        >
          <span className="font-bold mb-2 text-[18px] text-black">
            {details[4]?.title}:{" "}
          </span>
          {details[4]?.description}
        </p>
        <br />
        <p
          id="performance-bonds"
          className="ss:text-[16px] text-[14px] text-light_text leading-10 w-full   tracking-wider"
        >
          <span className="font-bold mb-2 text-[18px] text-black">
            {details[5]?.title}:{" "}
          </span>
          {details[5]?.description}
        </p>
        <br />
      </div>
      <div
        className={`${layout.sectionReverse} sm:items-start items-center p-10 bg-section mb-32`}
      >
        <div className={`${layout.sectionInfo} flex  `}>
          <h1 className="ss:text-[64px] text-[24px] font-tinos font-bold text-start ">
            {details[6]?.title}
          </h1>
          <p className="ss:text-[16px] text-[14px] text-light_text leading-10 w-full   tracking-wider">
            {details[6]?.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trade_detail;

{
  /*  */
}
