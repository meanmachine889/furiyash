import { ArrowUpRight } from "lucide-react";
import landing from "../../public/images/Component2.png";
import React from "react";
import Pic from "../pic";

const content = [
  {
    src: landing,
    alt: "Clarity",
    text: "Upload your pdfs and chat with them",
  },
];

const Clarity = () => {
  return (
    <div className="w-full min-h-fit flex flex-col items-center font-[family-name:var(--font-geist-mono)] justify-center">
      <div className="w-[100%] min-h-[4rem] md:grid hidden grid-cols-12 border-gray-700">
        <div className="border-r col-span-1 border-gray-700 w-full"></div>
        <div className="col-span-10 border-gray-700 w-full"></div>
        <div className="border-l col-span-1 border-gray-700 w-full"></div>
      </div>

      <div className="w-full border-y text-gray-300 border-gray-700 h-[10rem] grid grid-cols-2 md:grid-cols-12 justify-center items-center">
        <div className="col-span-1 border-r items-center justify-center h-full border-gray-700 hidden md:flex"></div>
        <div className="col-span-2 md:col-span-4 font-[family-name:var(--font-archivo)] text-gray-300 font-semibold text-[5vw] md:text-[3.5vw] border-r flex items-center justify-center md:px-5 h-full border-gray-700">
          <p className="md:w-[100%] w-[90%] border-gray-700 flex items-center justify-center md:border-x-0 border-x h-[100%]">Clarity</p>
        </div>        
        <div className="col-span-1 md:col-span-2 border-r items-center justify-center h-full border-gray-700 hidden md:flex"></div>
        <div className="col-span-1 md:col-span-2 text-[3vw] md:text-[1.2vw] border-r items-center justify-center h-full border-gray-700 hidden md:flex"></div>
        <div className="col-span-2 md:col-span-2 grids border-r md:border-t-0 border-t flex items-center justify-center h-full border-gray-700">
          <div className="md:w-full w-[90%] md:border-x-0 border-x bg-black py-3 md:h-fit h-[100%] md:py-5 md:px-0 px-9 hover:bg-gray-300 hover:text-slate-900 transition-all hover:gap-6 hover:scale-105 border-y gap-2 md:gap-5 flex items-center justify-center border-gray-700 text-[4vw] md:text-base">
            Visit Website <ArrowUpRight size={20} />
          </div>
        </div>        
        <div className="col-span-1 border-r items-center justify-center h-full border-gray-700 hidden md:flex"></div>
      </div>

      <div className="w-full border-b text-gray-300 border-gray-700 h-auto md:h-[7rem] grid grid-cols-2 md:grid-cols-12 justify-center items-center">
        <div className="col-span-1 border-r  items-center justify-center h-full border-gray-700 hidden md:flex grids"></div>

        <div className="col-span-2 md:col-span-4 px-5 border-r md:border-b-0 border-b flex flex-col items-start md:justify-around justify-center  gap-5 md:py-0 py-3 h-full border-gray-700">
          <h1 className="text-[3.3vw] md:text-[1.5vw] text-gray-600">Technology</h1>
          <p className="text-[2.5vw] md:text-[1.2vw] text-gray-400">NextJs Gemini AWS Gemini SQL Pinecone</p>
        </div>

        <div className="col-span-1 md:col-span-2 px-5 border-r md:border-b-0 border-b flex flex-col items-start md:justify-around justify-center  gap-5 md:py-0 py-3 h-full border-gray-700">
          <h1 className="text-[3.3vw] md:text-[1.5vw] text-gray-600">Type</h1>
          <p className="text-[2.5vw] md:text-[1.2vw] text-gray-400">Personal</p>
        </div>

        <div className="col-span-1 md:col-span-2 px-5 border-r md:border-b-0 border-b flex flex-col items-start md:justify-around justify-center  gap-5 md:py-0 py-3 h-full border-gray-700">
          <h1 className="text-[3.3vw] md:text-[1.5vw] text-gray-600">Duration</h1>
          <p className="text-[2.5vw] md:text-[1.2vw] text-gray-400">1 month</p>
        </div>

        <div className="col-span-1 md:col-span-2 px-5 border-r flex flex-col items-start md:justify-around justify-center  gap-5 md:py-0 py-3 h-full border-gray-700">
          <h1 className="text-[3.3vw] md:text-[1.5vw] text-gray-600">Date</h1>
          <p className="text-[2.5vw] md:text-[1.2vw] text-gray-400">June 2024</p>
        </div>
        
        {/* Hide this div on smaller screens */}
        <div className="col-span-1 border-r  items-center justify-center h-full border-gray-700 hidden md:flex grids"></div>
      </div>

      <Pic content={content} />
    </div>
  );
};

export default Clarity;
