import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Profile = (props) => {
  return (
    <section className="flex justify-center items-center lg:h-[80%] h-fit ">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-center justify-center mt-16 lg:mt-32 mb-16 lg:mb-32 ">
        <div className="lg:w-80 lg:h-80 w-30 h-30 rounded-full shadow-amber-500 shadow-sm overflow-hidden border-4 border-gray-300">
          <img
            className="w-full h-full rounded-full object-cover object-top"
            src="images/linkedin-prof.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-lg font-semibold text-gray-600 ">Hello, I'm</h1>
          <h1 className="lg:text-5xl text-3xl font-bold">
            Kevin Njoroge
          </h1>
          <h1 className="lg:text-3xl text-xl text-gray-600 font-semibold">
            Frontend Developer
          </h1>
          <div className="flex gap-6">
            <button className="p-2 bg-gray-100 text-black rounded-md text-[18px] font-semibold cursor-pointer border-gray-300 border">
              Download CV
            </button>
            <button onClick={() => {
              props.scrollIntoSection(props.contactRef)
            }} className="p-2 bg-black text-white rounded-md text-[18px] font-semibold cursor-pointer">
              Contact Info
            </button>
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/kevin-njoroge14/"><FaLinkedin size={40} /></a>
            <a href="https://github.com/KC-Njoroge21"><FaGithub size={40} /></a>
            <a href="https://wa.me/254796275516"><FaWhatsappSquare size={40} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
