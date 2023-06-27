import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { menu, cross, logo } from "../Asset";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  

  return (
    <nav  className="flex items-center w-full justify-between navbar ">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="sm:w-[200px] w-[100px] " />
      </Link>
      <div>
        <ul className="sm:flex hidden items-center">
          <CustomLink to={"/"}>Home</CustomLink>
          <CustomLink to={"/about"}>About</CustomLink>
          <CustomLink to={"/trade-finance"}>Trade Finance</CustomLink>
          <CustomLink to={"/shipping-fulfillment"}>
            Shipping Fulfillment
          </CustomLink>
        </ul>
      </div>
      <div className="sm:hidden flex">
        <img
          src={menu}
          alt=""
          className="w-[32px]"
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <div className={`sidebar bg-primary slide-right`}>
            <img
              src={cross}
              alt=""
              onClick={() => setToggle(false)}
              className="w-[18px] h-[18px] top-[50px] left-[20px] absolute"
            />
            <ul className="flex flex-col mt-[100px] ml-[20px] list-none cursor-pointer items-start flex-1 ">
              <CustomLink to={"/"} onClick={() => setToggle(false)}>
                Home
              </CustomLink>
              <CustomLink to={"/about"} onClick={() => setToggle(false)}>
                About
              </CustomLink>
              <CustomLink
                to={"/trade-finance"}
                onClick={() => setToggle(false)}
              >
                Trade Finance
              </CustomLink>
              <CustomLink
                to={"/shipping-fulfillment"}
                onClick={() => setToggle(false)}
              >
                Shipping Fulfillment
              </CustomLink>
            </ul>

            <Link to={"/contact-us"}>
              <button className="btn btn_outline sm:hidden block ml-[20px] text-[14px] w-[150px]">
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </div>
      <Link to={"/contact-us"} className="sm:block hidden">
        <button className="btn btn_outline w-[170px] sm:block hidden ">
          Contact Us
        </button>
      </Link>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li
      className={`${
        isActive ? "text-secondary  bg-links_bg rounded-[8px]" : "text-white"
      } p-[10px] sm:text-[16px] text-[14px] font-normal sm:ml-[20px] ml-0 sm:mb-0 mb-[20px] `}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
