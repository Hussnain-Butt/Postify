import React, { useState } from "react";
import { images } from "../constants";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const navItemInfo = [
  {
    name: "Home",
    type: "link",
  },
  {
    name: "Articles",
    type: "link",
  },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { title: "About us", href: "/about" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    name: "Pricing",
    type: "link",
  },
  {
    name: "FaQ",
    type: "link",
  },
];

const NavItem = ({ item }) => {
  return (
    <>
      <li className="relative group hover:text-[#1576D8] ease-in duration-200">
        {item.type === "link" ? (
          <a href="">{item.name}</a>
        ) : (
          <>
            <a
              href=""
              className="flex  items-center hover:text-[#1576D8] ease-in duration-200 "
            >
              {item.name}
              <span>
                <RiArrowDropDownLine />
              </span>
            </a>

            <div className=" py-7 hidden transition-all duration-500 pt-4 absolute bottom-0 right-0 transform translate-y-full lg:group-hover:block w-[25vh]">
              <ul className=" bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                {item.items.map((page, index) => (
                  <a
                    key={index}
                    className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                  >
                    {page.title}
                  </a>
                ))}
              </ul>
            </div>
          </>
        )}
      </li>
    </>
  );
};
const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };
  return (
    <>
      <section>
        <header className="w-auto lg:w-[1200px]  mx-auto px-5 py-5  flex justify-between items-center">
          <div>
            <img className="w-16 lg:w-24" src={images.Logo} alt="Logo" />
          </div>
          <div className="z-50 block lg:hidden">
            {navIsVisible ? (
              <IoMdClose
                className="w-6 h-6 cursor-pointer"
                onClick={navVisibilityHandler}
              />
            ) : (
              <CiMenuFries
                className="w-6 h-6 cursor-pointer"
                onClick={navVisibilityHandler}
              />
            )}
          </div>
          <div
            className={`${
              navIsVisible ? "right-0" : "-right-full"
            } z-[49] transition-all ease-in duration-300 bg-dark-hard pt-10 lg:pt-0 text-white mt-[60px] lg:mt-[0px] lg:text-black lg:bg-transparent flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 -right-full lg:static flex gap-12 items-center`}
          >
            <ul className="text-[16px] items-center flex flex-col lg:flex-row  gap-7 font-semibold ">
              {navItemInfo.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </ul>
            <button className="text-[16px] font-semibold border border-2 border-primary px-6 py-2 rounded-full hover:bg-primary ease-in duration-300 hover:text-white">
              Sign In
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
