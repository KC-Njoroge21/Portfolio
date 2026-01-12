import React, { useState } from "react";
import { Fa0 } from "react-icons/fa6";

const Header = (props) => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="p-8 relative shadow-sm ">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <h1 className="lg:text-4xl text-2xl tracking-wide font-semibold text-red-900">
          Kevin Njoroge
        </h1>

        <ul className="lg:flex hidden gap-12 ">
          <button onClick={() => {props.scrollIntoSection(props.refs.aboutRef)}}>
            <li className="lg:text-2xl text-[18px] font-normal cursor-pointer hover:scale-105 duration-300 active:text-amber-300 ">
            About
          </li>
          </button>
          <button onClick={() => {props.scrollIntoSection(props.refs.experienceRef)}}>
            <li className="lg:text-2xl text-[18px]  font-normal cursor-pointer hover:scale-105 duration-300 active:text-amber-300 ">
            Experience
          </li>
          </button>
          <button onClick={() => {props.scrollIntoSection(props.refs.projectsRef)}}>
            <li className="lg:text-2xl text-[18px]  font-normal cursor-pointer hover:scale-105 duration-300 active:text-amber-300 ">
            Projects
          </li>
          </button>
          <button onClick={() => {props.scrollIntoSection(props.refs.contactRef)}}>
            <li className="lg:text-2xl text-[18px]  font-normal cursor-pointer hover:scale-105 duration-300 active:text-amber-300 ">
            Contact
          </li>
          </button>
        </ul>

        <div className="lg:hidden block">
          <button onClick={() =>{setShowMenu(!showMenu)}} className="text-2xl font-bold text-red-900">☰</button>
        </div>

       
      </div>

       {
        showMenu ?  <ul className="flex flex-col shadow p-8 gap-4 w-40 right-0  top-18 absolute bg-white rounded-md lg:hidden ">
          <button onClick={() => {props.scrollIntoSection(props.refs.aboutRef)}}>
            <li className="lg:text-2xl text-[18px] font-normal cursor-pointer hover:scale-105 duration-300 active:text-amber-300 ">
            About
          </li>
          </button>
          <button onClick={() => {props.scrollIntoSection(props.refs.experienceRef)}}>
            <li className="lg:text-2xl text-[18px]  font-normal cursor-pointer hover:scale-105 duration-300 active:text-amber-300 ">
            Experience
          </li>
          </button>
          <button onClick={() => {props.scrollIntoSection(props.refs.projectsRef)}}>
            <li className="lg:text-2xl text-[18px]  font-normal cursor-pointer hover:scale-105 duration-300 active:text-amber-300 ">
            Projects
          </li>
          </button>
          <button onClick={() => {props.scrollIntoSection(props.refs.contactRef)}}>
            <li className="lg:text-2xl text-[18px]  font-normal cursor-pointer hover:scale-105 duration-300 active:text-amber-300 ">
            Contact
          </li>
          </button>
        </ul> : null
       }
    </header>
  );
};

export default Header;
