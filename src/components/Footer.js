import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex w-full my-5 py-10 px-4 mx-auto border-t-2 border-gray-800 ">
      <h2 className="md:pl-[25%] md:text-6xl text-4xl text-red-600 font-bold tracking-[3px] space-y-2">
        <Link to="/about-us">Netflix</Link>
      </h2>

      <div className="sm:w-1/2 text-lg text-gray-400 font-medium ml-[17%]">
        <Link to={"/about-us"}>
          <p className="pl-[10%] mb-2">About Us</p>
        </Link>
        <Link to={"/contact-us"}>
          <p className="pl-[10%]">Contact Us</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
