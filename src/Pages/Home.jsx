import React from "react";
import {
  Hero,
  About_Sec,
  Choose_Sec,
  Form,
  Hero_Sec,
  Banner,
  Banner2,
} from "../Components";
import "./Home.css";
import styles from "../style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  document.title = "Home - Balboa Trade Shipping";
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.paddingY} bg-primary`}>
        <div data-aos="fade-up" className={`${styles.boxWidth}`}>
          <Banner />
        </div>
      </div>
      <div className={` bg-secondary banner`}>
        <div data-aos="fade-up" className={`${styles.boxWidth}`}>
          <Banner2 />
        </div>
      </div>
      <div className="banner_1">
        <div className={`${styles.paddingX} ${styles.paddingY}  bg_1`}>
          <div data-aos="fade-up" className={`${styles.boxWidth} `}>
            <Hero />
          </div>
        </div>
      </div>
      <div className="banner_2">
        <div className={`${styles.paddingX} ${styles.paddingY}  bg`}>
          <div data-aos="fade-up" className={`${styles.boxWidth}`}>
            <Hero_Sec />
          </div>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY}  bg-primary`}>
        <div data-aos="fade-up" className={`${styles.boxWidth}`}>
          <About_Sec />
        </div>
      </div>
      <div className="banner_3">
        <div className={`${styles.paddingX} ${styles.paddingY} bg-section`}>
          <div data-aos="fade-up" className={`${styles.boxWidth}`}>
            <Choose_Sec />
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
  );
};

export default Home;
