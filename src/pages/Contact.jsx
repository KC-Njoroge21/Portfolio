import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = (props) => {
  return (
    <section ref={props.ref} className="h-[55vh] flex flex-col gap-8">
      <div className="flex flex-col gap-4 items-center">
        <h1 className=" text-lg">Get in Touch</h1>
        <h1 className="lg:text-5xl text-3xl font-semibold">Contact Me</h1>
      </div>
      <div className="p-4 rounded-2xl border-gray-300 border-2 flex  lg:w-1/2 justify-center gap-4 mx-auto flex-wrap  ">
        <div className="flex items-center gap-3 hover:text-gray-500 duration-300 hover:underline ">
          <MdEmail size={25} />
          <a
            className="text-lg"
            target="blank"
            href=""
          >
            kevinnjorogesic@gmail.com
          </a>
        </div>
        <div className="flex gap-3 hover:text-gray-500 duration-300 hover:underline">
          <FaLinkedin size={25} />
          <a
            className="text-xl"
            target="blank"
            href="https://www.linkedin.com/in/kevin-njoroge14/"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="flex justify-center h-full items-end p-3">
        <p className="text-xl text-gray-500 text-center">
          Copyright © 2026 Kevin Njoroge. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
