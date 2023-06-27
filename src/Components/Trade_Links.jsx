import React from "react";
import { services } from "../Constants";

const Trade_Links = () => {
  return (
    <section className="flex  flex-wrap sm:justify-between justify-center ">
        {services.map((item)=>{
            return(
                <ul className="flex sm:mb-5 mb-5 ">
                    <li 
                    key={item.id}
                    className="m-3"
                    ><a className="card text-[14px] p-3  text-white  " href={`#${item.id}`}>{item.title}</a></li>
                </ul>
            )
        })}
    </section>
  );
};

export default Trade_Links;
