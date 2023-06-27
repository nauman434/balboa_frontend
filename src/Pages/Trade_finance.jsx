import React from "react";
import {
  Form,
  Hero,
  Trade_detail,
  Trade_Links
} from "../Components";
import styles from "../style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Trade_finance = () => {
  document.title = 'Trade Finance - Balboa Trade Shipping';
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div>

      <div className={`${styles.paddingX} ${styles.paddingY}  bg-primary`}>
        <div data-aos="fade-up" className={`${styles.boxWidth}`}>
          <Trade_Links/>
        </div>
      </div>
      <div className="banner_1">
        <div className={`${styles.paddingX} ${styles.paddingY}  bg_1`}>
          <div data-aos="fade-up" className={`${styles.boxWidth} `}>
            <Hero />
          </div>
        </div>
      </div>
      <div className="banner_5">
        <div className={`${styles.paddingX} ${styles.paddingY}  bg_3`}>
          <div className={`${styles.boxWidth} `}>
          <Trade_detail />
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

export default Trade_finance