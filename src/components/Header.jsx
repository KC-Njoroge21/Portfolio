import React from "react";

const Header = () => {
  return (
    <header className="p-8 shadow-sm ">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <h1 className="lg:text-4xl text-2xl tracking-wide font-semibold text-red-900">
          Kevin Njoroge
        </h1>

        <ul className="lg:flex gap-12 hidden ">
          <li className="lg:text-2xl text-[18px] font-normal cursor-pointer hover:scale-105 duration-300 active:text-amber-300 ">
            About
          </li>
          <li className="lg:text-2xl text-[18px]  font-normal cursor-pointer hover:scale-105 duration-300 active:text-amber-300 ">
            Experience
          </li>
          <li className="lg:text-2xl text-[18px]  font-normal cursor-pointer hover:scale-105 duration-300 active:text-amber-300 ">
            Projects
          </li>
          <li className="lg:text-2xl text-[18px]  font-normal cursor-pointer hover:scale-105 duration-300 active:text-amber-300 ">
            Contact
          </li>
        </ul>

        <div className="lg:hidden block">
          <button className="text-2xl font-bold text-red-900">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
