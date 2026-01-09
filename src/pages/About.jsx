import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-32 items-center justify-center mt-16 lg:mt-32 mb-16 lg:mb-32'>
        <div className="lg:w-90 lg:h-90 w-70 h-70 rounded-full   shadow-lg ">
        <img className='w-full h-full rounded-full object-cover object-top' src="images/linkedin-prof.jpg" alt="" />
      </div>
      <div>
        <h1>Hello, I'm</h1>
        <h1>Kevin Njoroge</h1>
        <h1>Frontend Developer</h1>
        <div>
          <button>Download CV</button>
          <button>Contact Info</button>
        </div>
        <div>
          <FaLinkedin />
          <FaGithub />
        </div>
      </div>
      </div>
    </section>
  )
}

export default About