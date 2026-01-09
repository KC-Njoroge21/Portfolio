import React from "react";
import { FaAward } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";

const About = () => {
  return (
    <section className="h-fit lg:h-full flex flex-col gap-2 items-center justify-evenly ">
      <div className="flex flex-col items-center">
        <h1 className="text-lg text-gray-600 ">Get To Know More</h1>

        <h1 className="lg:text-5xl text-3xl font-bold">About Me</h1>
      </div>

      <div className="flex lg:flex-row items-center flex-col  gap-12 w-3/4">
        <div className="lg:w-[45%] lg:h-120 h-70 w-70  rounded-xl overflow-hidden border-2 border-gray-300 shadow-amber-500 shadow-sm">
          <img
            className="w-full h-full object-cover object-top"
            src="/images/image2.png"
            alt=""
          />
        </div>

        <div className="w-full flex flex-col gap-6 ">
          <div className="flex gap-4 lg:flex-row flex-col">
            <div className="p-4 border-2 border-sky-200 shadow rounded-lg w-full gap-2 flex flex-col items-center">
              <FaAward size={35} />
              <h1 className="text-[22px] font-semibold">Experience</h1>
              <h1 className="text-[18px] text-gray-600">4+ years</h1>
              <h1 className="text-[18px] text-gray-600">
                Frontend Development
              </h1>
            </div>
            <div className="p-4 border-2 rounded-lg gap-2 border-sky-200 shadow w-full flex flex-col items-center">
              <MdSchool size={35} />
              <h1 className="text-[22px] font-semibold">Education</h1>
              <h1 className="text-[18px] text-gray-600">
                B.Sc. Computer Science
              </h1>
              <h1 className="text-[18px] text-gray-600 ">
                The Catholic University of Eastern Africa
              </h1>
            </div>
          </div>
          <div >
            <p className="lg:text-[20px]">
              I am a Bachelor of Science in Computer Science graduate with a
              strong foundation in software development, problem-solving, and
              modern web technologies. I enjoy building efficient, user-focused
              applications and continuously improving my technical and design
              skills. I am passionate about learning, collaboration, and turning
              ideas into practical digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
