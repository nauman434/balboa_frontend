import React from "react";
import { Form } from "../Components";
import styles from "../style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div className={`${styles.paddingX} ${styles.paddingY} form`}>
        <div data-aos="fade-up" className={`${styles.boxWidth}`}>
          <Form />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div data-aos="fade-up" className={`${styles.boxWidth}`}>
          <h1 className="font-bold text-[24px] text-secondary leading-5 mb-5 mt-5">Business Hours</h1>
          <h1 className="font-medium ss:text-[18px] text-[16px] text-primary leading-5 mb-10">Please send us a message via the above form or <a href="#" className="text-secondary">LinkedIn</a> for first contact.</h1>
          <div className="flex w-30 justify-between mb-5">
            <h1 className="font-bold ss:text-[20px] text-[16px] text-primary leading-5">MONDAY - FRIDAY</h1>
            <h1 className="font-bold ss:text-[20px] text-[16px] text-primary leading-5">OPEN</h1>
          </div>
          <div className="flex w-30 justify-between mb-5">
            <h1 className="font-bold ss:text-[20px] text-[16px] text-primary leading-5">SATURDAY - SUNDAY</h1>
            <h1 className="font-bold ss:text-[20px] text-[16px] text-primary leading-5">CLOSED</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
