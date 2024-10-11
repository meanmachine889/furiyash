import { ArrowUpRight } from "lucide-react";
import React from "react";

const experience = [
  {
    date: "May-Current",
    duration: "5 months",
    company: "Eventory",
    role: "Fullstack Developer",
    stack: "NextJs Nodejs Express AWS",
  },
  {
    date: "Jul-Current",
    duration: "3 months",
    company: "M#",
    role: "Fullstack Developer",
    stack: "NextJs Nodejs Express AWS",
  },
  {
    date: "May-Aug 2024",
    duration: "4 months",
    company: "Horse's Mouth",
    role: "Fullstack Developer",
    stack: "NextJs AWS Jotai",
  },
  {
    date: "Jul-Current",
    duration: "2 months",
    company: "MTTN",
    role: "Dev Head",
    stack: "NextJs AWS",
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Header */}
      <div className="w-[95%] flex items-center justify-end py-9">
        <h1 className="font-[family-name:var(--font-clash-semi)] text-gray-300 text-[8vw] md:text-[5vw] lg:text-[4vw] ">
          Work
        </h1>
      </div>
      
      {/* Experience List */}
      <div className="w-full flex font-[family-name:var(--font-geist-mono)] flex-col">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="flex md:flex-row justify-between md:h-[12vw] h-auto md:px-9 px-3 items-center border-y-2 border-gray-500 py-5 w-full transition-all"
          >
            <div className="w-full md:w-[95%] flex justify-between flex-col md:flex-row items-start md:items-center text-left">
              {/* Company and Role Info */}
              <div className="flex flex-col w-full md:w-[65%] gap-2 md:gap-5">
                <p className="text-gray-300 text-[6vw] md:text-[2.5vw] font-[family-name:var(--font-archivo)]">
                  {exp.company}
                </p>
                <p className="text-gray-400 text-[4.5vw] md:text-[1.4vw]">
                  <span className="text-gray-400 text-[4.5vw] md:text-[1.7vw]">
                    {exp.role} /{" "} 
                  </span> 
                  {exp.stack}
                </p>
              </div>
              
              {/* Date and Duration Info */}
              <div className="flex flex-col w-full md:w-[30%] md:gap-5 mt-3 md:mt-0 md:mb-2">
                <p className="text-gray-300 text-[5vw] md:text-[1.7vw]">
                  {exp.date}
                </p>
                <p className="text-gray-500 text-[4.5vw] md:text-[1.7vw]">
                  {exp.duration}
                </p>
              </div>
            </div>
            
            {/* Arrow Button */}
            <button className="self-end md:self-center mt-3 md:mt-0 text-slate-300 rounded-full flex items-center justify-center">
              <ArrowUpRight className="h-[9vw] w-[9vw] md:h-[3vw] md:w-[3vw]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
