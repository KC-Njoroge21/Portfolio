import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  return (
    <section className="flex justify-center items-center h-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-center justify-center mt-16 lg:mt-32 mb-16 lg:mb-32 ">
        <div className="lg:w-120 lg:h-120 w-70 h-70 rounded-full shadow-amber-500 shadow-sm overflow-hidden border-4 border-gray-300">
          <img
            className="w-full h-full rounded-full object-cover object-top"
            src="images/linkedin-prof.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-lg font-semibold text-gray-600 ">Hello, I'm</h1>
          <h1 className="lg:text-5xl text-4xl font-bold tracking-wider">
            Kevin Njoroge
          </h1>
          <h1 className="text-3xl text-gray-600 font-semibold">
            Frontend Developer
          </h1>
          <div className="flex gap-6">
            <button className="p-2 bg-gray-100 text-black rounded-md text-[18px] font-semibold cursor-pointer border-gray-300 border">
              Download CV
            </button>
            <button className="p-2 bg-black text-white rounded-md text-[18px] font-semibold cursor-pointer">
              Contact Info
            </button>
          </div>
          <div className="flex gap-6">
            <FaLinkedin size={40} />
            <FaGithub size={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
