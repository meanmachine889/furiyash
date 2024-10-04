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
    <div className="flex flex-col items-center justify-center w-[100%]">
      <div className="w-[95%] flex items-center justify-end py-5">
        <h1 className="font-[family-name:var(--font-clash-semi)] text-gray-300 text-[5vw]">
          Work
        </h1>
      </div>
      <div className="w-[100%] flex font-[family-name:var(--font-geist-mono)] flex-col">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="flex justify-between h-[18rem] px-5 items-center border-y-2 transition-all  border-gray-700 py-5 w-[100%]"
          >
            <div className="w-[95%] flex justify-between h-[100%] flex-col items-start text-left">
              <div className="flex justify-start w-[65%] md:gap-5 md:w-[100%] flex-col">
                <p className="text-gray-300 text-[2vw] font-[family-name:var(--font-archivo)] md:text-[2.5vw]">
                  {exp.company}
                </p>
                <p className="text-gray-400 text-[1.3vw] md:text-[1.4vw]">
                  <span className="text-gray-400 text-[1.4vw] md:text-[1.7vw]">{exp.role} / </span>{exp.stack}
                </p>
              </div>
              <div className="flex flex-col justify-start w-[30%] md:w-[100%] md:mb-2">
                <p className="text-gray-300 text-[2vw] md:text-[1.7vw]">
                  {exp.date}
                </p>
                <p className="text-gray-500 text-[2vw] md:text-[1.1vw]">
                  {exp.duration}
                </p>
              </div>
            </div>
            <button className="self-end  text-slate-300 rounded-full flex items-center justify-center">
              <ArrowUpRight className="h-12 w-12" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
