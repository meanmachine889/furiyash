import { ArrowUpRight } from "lucide-react";
import React from "react";

const Mhash = () => {
  return (
    <div className="w-[100%] min-h-fit flex flex-col items-center font-[family-name:var(--font-geist-mono)] justify-center">
      <div className="w-[90%] border-x border-gray-700">
        <div className="border-b border-gray-700 min-h-[4rem] w-[100%]"></div>
      </div>
      <div className="w-[100%] border-b text-gray-300 font-[family-name:var(--font-geist-mono)] border-gray-700 h-[10rem] flex justify-center items-center">
        <div className="w-[5%] border-r flex items-center justify-center h-[100%] border-gray-700"></div>
        <div className=" w-[40%] font-[family-name:var(--font-archivo)] text-gray-300 font-semibold text-[3.5vw] border-r flex items-center justify-center px-5 h-[100%] border-gray-700">
          Manipal Hackathon
        </div>
        <div className="flex-1 border-r flex items-center justify-center h-[100%] border-gray-700"></div>
        <div className="flex-1 text-[1.2vw] border-r flex items-center justify-center h-[100%] border-gray-700"></div>
        <div className="flex-1 border-r grids gap-5 flex items-center justify-center h-[100%] border-gray-700">
          <div className="w-[100%] bg-black py-5 hover:bg-gray-300 hover:text-slate-900 transition-all hover:gap-6 hover:scale-105 border-y gap-5 flex items-center justify-center border-gray-700">
            Visit Website <ArrowUpRight size={20} />
          </div>
        </div>
        <div className="w-[5%] text-[1.2vw] border-r flex items-center justify-center h-[100%] border-gray-700"></div>
      </div>
      <div className="w-[100%] border-b text-gray-300 font-[family-name:var(--font-geist-mono)] border-gray-700 h-[7rem] flex justify-center items-center">
        <div className="w-[5%] grids border-r flex items-center justify-center h-[100%] border-gray-700"></div>
        <div className="w-[40%] px-5 border-r flex flex-col items-start justify-around h-[100%] border-gray-700">
            <h1 className="text-xl text-gray-600">Technology</h1>
            <p className="text-2xl text-gray-400">NextJs NodeJs Express</p>
        </div>
        <div className="flex-1 px-5 border-r flex flex-col items-start justify-around h-[100%] border-gray-700">
            <h1 className="text-lg text-gray-600">Type</h1>
            <p className="text-xl text-gray-400">Production</p>
        </div>
        <div className="flex-1 px-5 border-r flex flex-col items-start justify-around h-[100%] border-gray-700">
            <h1 className="text-lg text-gray-600">Duration</h1>
            <p className="text-xl text-gray-400">3 months</p>
        </div>
        <div className="flex-1 px-5 border-r flex flex-col items-start justify-around h-[100%] border-gray-700">
            <h1 className="text-lg text-gray-600">Date</h1>
            <p className="text-xl text-gray-400">July 2024</p>
        </div>
        
        <div className="w-[5%] grids text-[1.2vw] border-r flex items-center justify-center h-[100%] border-gray-700"></div>
      </div>
    </div>
  );
};

export default Mhash;
