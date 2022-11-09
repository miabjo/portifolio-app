import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export const HomePage = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#d5cdd7]">
      <div className="max-w-[1000 px] mx-auto px-80 flex flex-col justify-center h-full">
        <p className="text-[#2a292a]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#6c6f78]">
          Mia Bjørndal
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#886986]">
          I´m an informatics student. 
        </h2>
        <p className="text-[#2a292a] py-4 max-w-[700px]">
          Hello, welcome to my portofolio
        </p>
        <div>
          <button className="text-[#2a292a] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
// [#6c6f78]