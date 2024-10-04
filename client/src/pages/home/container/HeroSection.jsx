import React from "react";
import { images } from "../../../constants";
import { IoSearchOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <>
      <section className="w-auto lg:w-[1200px] mx-auto px-5 py-5 lg:grid lg:grid-cols-2 lg:gap-4 md:grid md:grid-cols-2 md:gap-4 items-center mt-12">
        <div className=" px-1 lg:px-0 flex flex-col gap-7">
          <div className="hero-Text flex flex-col gap-3">
            <h2 className="text-5xl text-center lg:text-left md:text-left lg:text-5xl font-bold text-dark-hard leading-tight">
              Read the most <br /> interesting articles
            </h2>
            <p className="text-center lg:text-left md:text-left text-[17px] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="w-full flex justify-start items-center gap-4 shadow-lg pl-3 pt-2 rounded-lg">
            <span>
              <IoSearchOutline />
            </span>
            <input
              className="w-full py-3"
              type="text"
              name=""
              placeholder="Search Articles"
            />
            <button className="btn bg-primary hover:bg-dark-soft transition-all duration-300 py-3 px-7 rounded-lg text-white font-semibold">
              Search
            </button>
          </div>
          <div className="tags flex justify-start items-center gap-5">
            <span className="font-semibold text-dark-light italic">
              Popular Tags :
            </span>
            <ul className="flex justify-between items-center gap-3">
              <li className="bg-[#0073ff24] px-2 py-1 rounded-lg text-primary font-semibold text-[13px]">
                Design
              </li>
              <li className="bg-[#0073ff24] px-2 py-1 rounded-lg text-primary font-semibold text-[13px]">
                User Experience
              </li>
              <li className="bg-[#0073ff24] px-2 py-1 rounded-lg text-primary font-semibold text-[13px]">
                User Interfaces
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block md:block ">
          <img className="w-full" src={images.HeroImage} alt="" srcset="" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
