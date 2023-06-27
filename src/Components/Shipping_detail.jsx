import React, { useEffect, useState } from "react";
import { img1, img2, img3, img4 } from "../Asset";
import { layout } from "../style";
import axios from "axios";

const Choose_Sec = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://balboabackend-production-35f3.up.railway.app/shipping-fulfillments"
      )
      .then((res) => {
        console.log(res.data[0]);
        setDetails(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section className="flex flex-col">
      <div
        id="small-parcel"
        className={`${layout.sectionReverse}  items-center py-[20px] mt-32`}
      >
        <div className={layout.sectionImgReverse}>
          <img src={img1} alt="" className="w-[377px] h-[436px] relative " />
        </div>
        <div className={`${layout.sectionInfo} flex items-start  `}>
          <h1 className="ss:text-[48px] text-[24px] font-tinos font-bold text-start ">
            Small Parcel
          </h1>
          <br />
          <p className="ss:text-[16px] text-[14px] text-light_text leading-10 lg:w-[830px] w-full  text-start  tracking-wider">
            <span className="font-bold text-primary">
              Balboa will help optimize your carrier network, pricing
              agreements, and shipping methods which can significantly reduce
              costs and improve customer experience.{" "}
            </span>
            <br />
            What you can expect from our relationships are: <br />
            • Increased reliability by using best in category shipping carriers.{" "}
            <br />
            • Better flexibility working with diversified carriers enhancing
            each shipment's service level and savings. <br />
            • Pre-negotiated rates below commercial prices based on group volume
            with top world carriers giving you prices only the majors have
            access to. <br />
          </p>
        </div>
      </div>
      <div
        id="fulfillment-warehouse"
        className={`${layout.section}  items-center`}
      >
        <div className={`${layout.sectionInfo} flex items-start  `}>
          <h1 className="ss:text-[48px] text-[24px] font-tinos font-bold sm:text-start text-center">
            Fulfillment and Warehousing
          </h1>
          <br />
          <p className="ss:text-[16px] text-[14px] text-light_text leading-10 lg:w-[830px] w-full text-start tracking-wider">
            <span className="font-bold text-primary">
              Working with the right third-party fulfillment (3PF) company can
              be a daunting and frustrating task.
            </span>
            <br />
            <br /> At your request Balboa can introduce you to a network of high
            quality, professional 3PF that already enjoy access to our group
            volume discounts so the savings and service are immediate. <br />{" "}
            <br />
            Furthermore we can assist you in navigating and onboarding smoothly
            and cost efficiently.
          </p>
        </div>
        <div className={layout.sectionImg}>
          <img src={img2} alt="" className="w-[377px] h-[436px] relative " />
        </div>
      </div>
      <div
        id="LTL-truckload-shipping"
        className={`${layout.sectionReverse}  items-center`}
      >
        <div className={layout.sectionImgReverse}>
          <img src={img3} alt="" className="w-[377px] h-[436px] relative " />
        </div>
        <div
          className={`${layout.sectionInfo} flex sm:items-start items-center  `}
        >
          <h1 className="ss:text-[48px] text-[24px] font-tinos font-bold items-start">
            Less than Truckload (LTL) & Truckload Shipping
          </h1>
          <br />
          <p className="ss:text-[16px] text-[14px] text-light_text leading-10 lg:w-[830px] w-full text-start tracking-wider">
            <span className="font-bold text-primary">
              Balboa’s channel partners reduce the amount of time spent on
              managing inbound and outbound trucking reducing stress and costs.{" "}
            </span>
            <br />
            Customers can choose the most optimal payment method for their
            business: <br />
            • Easy to use technology that enables side-by-side comparison of our
            pre-negotiated rates to your contracted rates. <br />
            • Member exclusive group rates. <br />
            • Free and customized Request for Proposals (RFP) for specialized
            and specific shipping characteristics. <br />
            • General liability coding, freight bill audits and payment
            services. <br />
          </p>
        </div>
      </div>
      <div
        id="ocean-freight"
        className={`${layout.section}  items-center mb-32`}
      >
        <div className={`${layout.sectionInfo} flex items-start   `}>
          <h1 className="ss:text-[48px] text-[24px] font-tinos font-bold items-start">
            Ocean Freight
          </h1>
          <br />
          <p className="ss:text-[16px] text-[14px] text-light_text leading-10 lg:w-[830px] w-full text-start tracking-wider">
            <span className="font-bold text-primary">
              Capacity shortages and rising costs can compromise predicting
              inventory and landed costs.{" "}
            </span>{" "}
            <br />
            <br />
            We provide a peace of mind in the level of predictability and
            savings not available otherwise. <br />
            • Gain reserved container capacity directly with Maersk, the world’s
            largest ocean freight carrier. <br />
            • Access to Maersk exclusive contracts ensuring competitive pricing
            with beginning to end shipping solutions and support. <br />
            • As easy as booking a plane ticket you can book ocean freight's
            cargo value, coverage, customs clearance and to the door delivery.{" "}
            <br />
          </p>
        </div>
        <div className={layout.sectionImg}>
          <img src={img4} alt="" className="w-[377px] h-[436px] relative " />
        </div>
      </div>
    </section>
  );
};

export default Choose_Sec;

{
  /* <section className="flex flex-col">
      <div id="small-parcel"
        className={`${layout.sectionReverse} sm:items-start items-center py-[20px] mt-32`}
      >
        <div className={layout.sectionImgReverse}>
          <img src={img1} alt="" className="w-[377px] h-[436px] relative " />
        </div>
        <div
          className={`${layout.sectionInfo} flex sm:items-start items-center `}
        >
          <h1 className="ss:text-[64px] text-[24px] font-tinos font-bold sm:text-start text-center">
            {details[0]?.title}
          </h1>
          <p className="ss:text-[16px] text-[14px] text-light_text leading-10 lg:w-[830px] w-full  sm:text-start text-center tracking-wider">
            {details[0]?.description}
          </p>
        </div>
      </div>
      <div id="fulfillment-warehouse" className={`${layout.section} sm:items-start items-center`}>
        <div
          className={`${layout.sectionInfo} flex sm:items-start items-center  `}
        >
          <h1 className="ss:text-[64px] text-[24px] font-tinos font-bold sm:text-start text-center">
            {details[1]?.title}
          </h1>
          <p className="ss:text-[16px] text-[14px] text-light_text leading-10 lg:w-[830px] w-full sm:text-start text-center tracking-wider">
            {details[1]?.description}
          </p>
        </div>
        <div className={layout.sectionImg}>
          <img src={img2} alt="" className="w-[377px] h-[436px] relative " />
        </div>
      </div>
      <div id="LTL-truckload-shipping" className={`${layout.sectionReverse} sm:items-start items-center`}>
        <div className={layout.sectionImgReverse}>
          <img src={img3} alt="" className="w-[377px] h-[436px] relative " />
        </div>
        <div
          className={`${layout.sectionInfo} flex sm:items-start items-center  `}
        >
          <h1 className="ss:text-[64px] text-[24px] font-tinos font-bold sm:text-start text-center">
            {details[2]?.title}
          </h1>
          <p className="ss:text-[16px] text-[14px] text-light_text leading-10 lg:w-[830px] w-full sm:text-start text-center tracking-wider">
            {details[2]?.description}
          </p>
        </div>
      </div>
      <div id="ocean-freight" className={`${layout.section} sm:items-start items-center mb-32`}>
        <div
          className={`${layout.sectionInfo} flex sm:items-start items-center  `}
        >
          <h1 className="ss:text-[64px] text-[24px] font-tinos font-bold sm:text-start text-center">
            {details[3]?.title}
          </h1>
          <p className="ss:text-[16px] text-[14px] text-light_text leading-10 lg:w-[830px] w-full sm:text-start text-center tracking-wider">
            {details[3]?.description}
          </p>
        </div>
        <div className={layout.sectionImg}>
          <img src={img4} alt="" className="w-[377px] h-[436px] relative " />
        </div>
      </div>
    </section> */
}
