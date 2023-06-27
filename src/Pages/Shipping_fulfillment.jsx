import React from "react";
import {
  Form,
  Hero_Sec,
  Shipping_detail,
  Shipping_Links
} from "../Components";
import styles from "../style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Shipping_fulfillment = () => {
  document.title = 'Shipping Fulfillment - Balboa Trade Shipping';
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  

  return (
    <div>
      <div className={`${styles.paddingX} ${styles.paddingY} py-10 bg-primary`}>
        <div data-aos="fade-up" className={`${styles.boxWidth}`}>
          <Shipping_Links/>
        </div>
      </div>
      <div className="banner_2">
        <div className={`${styles.paddingX} ${styles.paddingY}  bg`}>
          <div data-aos="fade-up" className={`${styles.boxWidth}`}>
            <Hero_Sec />
          </div>
        </div>
      </div>
      <div className="banner_6">
        <div className={`${styles.paddingX} ${styles.paddingY}  bg-section`}>
          <div  className={`${styles.boxWidth} `}>
          <Shipping_detail />
          </div>
        </div>
      </div>
      <div className="banner_4">
        <div className={`${styles.paddingX} ${styles.paddingY} form`}>
          <div data-aos="fade-up" className={`${styles.boxWidth}`}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipping_fulfillment