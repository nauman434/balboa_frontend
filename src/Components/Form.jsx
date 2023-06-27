import React, { useState } from "react";
import { illustration } from "../Asset";
import styles from "../style";
import emailjs from "@emailjs/browser";
import axios from "axios";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://balboabackend-production-35f3.up.railway.app/mails/send", {
        firstName,
        lastName,
        email,
        subject,
        message,
        phone,
      })
      .then((res) => {
        alert("Form Submitted");
      })
      .catch((err) => console.log(err.message));

    emailjs
      .sendForm(
        "service_no89cqp",
        "template_0ejwiod",
        e.target,
        "76dSP1_zoLkQobbDf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(e.target);

    // emailjs.send('service_r44v58l', 'template_vrww7fr',  e.targ, 'bXQRh3Kne1IIFWuPN')

    //   db.collection('contacts').add({
    //     FirstName: name,
    //     LastName: lastName,
    //     Email: email,
    //     Subject: subject,
    //     Phone: phone,
    //     Message: message,
    //   })
    //   .then(()=>{
    //     alert('Form has been submitted')
    //   })
    //   .catch(error => {
    //     alert(error.message)
    //   });

    //   setName("");
    //   setLastName("");
    //   setEmail("");
    //   setSubject("");
    //   setPhone("");
    //   setMessage("");
  };

  return (
    <section className={`${styles.paddingY} flex w-full`}>
      <div className="flex w-full h-full ss:justify-between justify-center items-center">
        <div>
          <h1 className="ss:text-[54px] text-[34px] text-secondary font-tinos font-semibold ss:mt-8 mt-10 mb-10">
            Contact Us <span className="text-white">Now</span>
          </h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex lg:flex-row flex-col mb-5">
              <div className="mr-5 lg:mb-0 mb-5">
                <input
                  type="text"
                  placeholder="First name"
                  required
                  className="input_field  "
                  value={firstName}
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  required
                  className="input_field"
                  value={lastName}
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex mb-5 lg:flex-row flex-col">
              <div className="mr-5 lg:mb-0 mb-5">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="input_field "
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Email subject"
                required
                className="input_field"
                value={subject}
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="flex mb-5">
              <input
                type="text"
                placeholder="Your phone"
                required
                className=" input_field "
                value={phone}
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <textarea
              type="text"
              placeholder="Your message"
              rows="5"
              required
              className="msg_field"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input type="submit" className="btn bg-secondary w-[150px] mt-5" />
          </form>
        </div>
        <div>
          <img src={illustration} alt="" className="sm:flex hidden" />
        </div>
      </div>
    </section>
  );
};

export default Form;
