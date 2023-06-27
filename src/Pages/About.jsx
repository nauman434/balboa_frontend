import React from 'react';
import styles from '../style';
import { About_pg } from "../Components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  document.title = 'About - Balboa Trade Shipping';
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} bg-section`}>
        <div data-aos="fade-up" className={`${styles.boxWidth}`}>
          <About_pg/>
        </div>
      </div>
  )
}

export default About