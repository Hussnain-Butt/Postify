import React from "react";
import { images } from "../constants";
const navItemInfo = [
  {
    name: "Home",
  },
  {
    name: "Articles",
  },
  {
    name: "Pages",
  },
  {
    name: "Pricing",
  },
  {
    name: "FaQ",
  },
];

const NavItem = ({ name }) => {
  return (
    <>
      <li className="hover:text-[#1576D8] ease-in duration-200">
        <a href="">{name}</a>
      </li>
    </>
  );
};
const Header = () => {
  return (
    <>
      <section>
        <header className="w-[1100px] mx-auto px-5 py-5  flex justify-between items-center">
          <div>
            <img src={images.Logo} alt="Logo" />
          </div>
          <div className="flex gap-12 items-center">
            <ul className="text-[16px] flex gap-7 font-semibold ">
              {navItemInfo.map((item) => (
                <NavItem key={item.name} name={item.name} />
              ))}
            </ul>
            <button className="text-[16px] font-semibold border border-2 border-[#1576D8] px-6 py-2 rounded-full hover:bg-[#1576D8] ease-in duration-300 hover:text-white">
              Sign In
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
