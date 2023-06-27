import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { logo } from "../Asset";

const Footer = () => {
  return (
    <footer className="flex flex-col  py-10">
      <div className="flex ss:flex-row flex-col w-full justify-between">
        <Link
          to={"/"}
          className="flex ss:items-start items-center ss:justify-start justify-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="flex w-[130px] ss:justify-start justify-center"
          />
        </Link>
        <div>
          <ul className="flex ss:flex-row flex-col ss:items-start items-center ss:mt-0 mt-5">
            <CustomLink to={"/"}>Home</CustomLink>
            <CustomLink to={"/about"}>About</CustomLink>
            <CustomLink to={"/shipping-fulfillment"}>
              Shipping Fulfillment
            </CustomLink>
            <CustomLink to={"/trade-finance"}>Trade Finance</CustomLink>
          </ul>
        </div>
      </div>
      <div className="w-full ss:h-[2px] h-[1px] bg-section mt-5" />
      <div className="w-full ss:flex flex-wrap mt-5 text-white ss:text-[14px] text-[12px] list-none items-center ss:justify-between justify-center">
        <h1 className="ss:text-start text-center">© 2022 Balboa Trade & Shipping</h1>
        <div className="flex ss:mt-0 mt-5 ss:justify-between justify-center">
          <Link className="underline mr-[40px]" to={"/privacy-policy"}>
            Privacy Policy
          </Link>
          <Link className="underline" to={"/terms-of-services"}>
            Terms of Services
          </Link>
        </div>
      </div>
    </footer>
  );
};
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li
      className={`${
        isActive ? "text-secondary " : "text-white"
      } p-[10px] sm:text-[16px] text-[14px] font-normal sm:ml-[20px] ml-0 sm:mb-0 mb-[20px] `}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Footer;
