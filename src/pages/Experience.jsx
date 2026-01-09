import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Experience = () => {
  return (
    <section className="lg:h-screen h-fit">
      <div className="flex flex-col h-full justify-center gap-20 ">
        <div className="flex items-center flex-col ">
        <h1 className="text-lg">Explore My</h1>
        <h1 className="lg:text-5xl text-4xl font-bold">Experience</h1>
      </div>

      <div className="w-full flex lg:flex-row flex-col lg:justify-center items-center gap-12 ">
        <div className="border border-gray-300 rounded-4xl flex flex-col gap-6 lg:w-[40%] h-full p-6">
          <h1 className="text-center lg:text-3xl text-xl font-semibold text-gray-600">
            Frontend Development
          </h1>
          <div className=" grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2  place-items-center">
            <div className="flex items-center gap-4">
              <RiVerifiedBadgeFill lg:size={30} size={20} />
              <div>
                <h1 className="font-semibold text-lg">HTML</h1>
                <h1 className="text-[18px]">Experienced</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <RiVerifiedBadgeFill lg:size={30} size={20} />
              <div>
                <h1 className="font-semibold text-lg">SAAS</h1>
                <h1 className="text-[18px]">Intermediate</h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <RiVerifiedBadgeFill lg:size={30} size={20} />
              <div>
                <h1 className="font-semibold text-lg">CSS</h1>
                <h1 className="text-[18px]">Experienced</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <RiVerifiedBadgeFill lg:size={30} size={20} />
              <div>
                <h1 className="font-semibold text-lg">JavaScript</h1>
                <h1 className="text-[18px]">Experienced</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <RiVerifiedBadgeFill lg:size={30} size={20} />
              <div>
                <h1 className="font-semibold text-lg">React</h1>
                <h1 className="text-[18px]">Experienced</h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <RiVerifiedBadgeFill lg:size={30} size={20} />
           <div>
               <h1 className="font-semibold text-lg gap-4">TypeScript</h1>
              <h1 className="text-[18px]">Experienced</h1>
            </div>
           </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-4xl flex flex-col gap-6 h-full lg:w-[40%] p-6">
          <h1 className="text-center lg:text-3xl text-xl font-semibold text-gray-600">
            Frontend Development
          </h1>
          <div className=" grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2  place-items-center">
            <div className="flex items-center gap-4">
              <RiVerifiedBadgeFill lg:size={30} size={20} />
              <div>
                <h1 className="font-semibold text-lg">Node JS</h1>
                <h1 className="text-[18px]">Intermidiate</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <RiVerifiedBadgeFill lg:size={30} size={20} />
              <div>
                <h1 className="font-semibold text-lg">Git</h1>
                <h1 className="text-[18px]">Intermediate</h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <RiVerifiedBadgeFill lg:size={30} size={20} />
              <div>
                <h1 className="font-semibold text-lg">Express JS</h1>
                <h1 className="text-[18px]">Experienced</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <RiVerifiedBadgeFill lg:size={30} size={20} />
              <div>
                <h1 className="font-semibold text-lg">Mongo DB</h1>
                <h1 className="text-[18px]">Experienced</h1>
              </div>
            </div>
           
            
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Experience;
