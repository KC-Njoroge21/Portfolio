import React from "react";

const Projects = (props) => {
  return (
    <section ref={props.ref} className=" ">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-lg">Browse My Recent</h1>
        <h1 className="text-5xl font-bold">Projects</h1>
      </div>

      <div className=" w-full flex flex-wrap justify-center gap-8 h-full p-8">

        <div className="border border-gray-300 rounded-3xl h-130 p-8 flex flex-col  min-w-[40%] gap-4 bg-gray-100">
          <div className="overflow-hidden  h-[80%] rounded-3xl">
            <img className="w-full h-full object-cover" src="/images/todo-list.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-center">Todo List App</h1>
            <div className="flex justify-center gap-6">
              <button className="p-3 border-2 rounded-xl text-lg font-semibold border-gray-400 hover:bg-black hover:text-white duration-300 hover:border-black cursor-pointer ">Githhub</button>
               <a className="p-3 border-2 rounded-xl text-lg font-semibold border-gray-400 hover:bg-black hover:text-white duration-300 hover:border-black cursor-pointer" target="blank" href="https://kevtosdolist.netlify.app/">Live Demo</a>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-3xl min-w-[40%] h-130 p-8 flex flex-col gap-4 bg-gray-100">
          <div className="overflow-hidden w-full h-[80%] rounded-3xl">
            <img className="w-full h-full object-cover" src="/images/weather.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-center">Weather App</h1>
            <div className="flex justify-center gap-6">
              <button className="p-3 border-2 rounded-xl text-lg font-semibold border-gray-400 hover:bg-black hover:text-white duration-300 hover:border-black cursor-pointer">Githhub</button>
              <a className="p-3 border-2 rounded-xl text-lg font-semibold border-gray-400 hover:bg-black hover:text-white duration-300 hover:border-black cursor-pointer" target="blank" href="https://kevweather.netlify.app/">Live Demo</a>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-3xl lg:w-[80%] min-w-[40%] h-[120vh] p-8 flex flex-col gap-4 justify-between bg-gray-100">
          <div className="overflow-hidden w-full rounded-3xl h-[90%]">
            <img className="w-full h-full object-cover" src="/images/foodrecipe.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-center">Food Recipe App</h1>
            <div className="flex justify-center gap-6">
              <button className="p-3 border-2 rounded-xl text-lg font-semibold border-gray-400 hover:bg-black hover:text-white duration-300 hover:border-black cursor-pointer">Githhub</button>
              <a className="p-3 border-2 rounded-xl text-lg font-semibold border-gray-400 hover:bg-black hover:text-white duration-300 hover:border-black cursor-pointer" target="blank" href="https://kevinfoodrecipe.netlify.app/">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
