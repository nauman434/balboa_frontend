import React from "react";
import styles from "../style";

const About_Sec = () => {
  return (
    <section className={`${styles.paddingY} `}>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="ss:text-[62px] text-[24px] text-white text-center font-tinos font-bold  lg:w-[830px] w-full ss:mb-[40px] mb-[20px]">
          Unlock Your Business Potential With{" "}
          <span className="text-secondary">Balboa Trade & Shipping</span>
        </h1>
        <p className="ss:text-[16px] text-[14px] text-white text-center ss:leading-10 lg:w-[830px] w-full leading-8 tracking-wider">
          Shipping costs are going up impacting both ocean freight importing and
          domestic trucking and postage. Every dollar saved makes a big impact
          on the feasibility of shipping products in an evironment where more
          and more people are importing globally and buying products online. On
          top of rising shipping costs banking fees and lending rates are rising
          dramatically across the globe making it almost intolerable for local
          importers and exporters to make the profit margins needed to grow and
          expand. With Balboa Trade & Shipping your business will get access to
          discounts and trade finance leverage that will help you to stay
          competitive and stay ahead of changing markets.
        </p>
      </div>
    </section>
  );
};

export default About_Sec;
