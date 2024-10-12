import {ArrowUpRight} from "lucide-react";
import React from "react";
import Pic from "../pic";
import {StaticImageData} from "next/image";

interface ProjectProps {
    name: string;
    tech: string;
    type: string;
    duration: string;
    date: string;
    content: {
        src: StaticImageData;
        alt: string;
        text: string;
    }[];
}

const Project: React.FC<{ data: ProjectProps }> = ({data}) => {
    return (
        <div
            className="w-full min-h-fit flex flex-col items-center font-[family-name:var(--font-geist-mono)] justify-center">
            <div className="w-[100%] min-h-[4rem] md:grid hidden grid-cols-12 border-gray-700">
                <div className="border-r col-span-1 border-gray-700 w-full"></div>
                <div className="col-span-10 border-gray-700 w-full"></div>
                <div className="border-l col-span-1 border-gray-700 w-full"></div>
            </div>

            <div
                className="w-full border-y text-gray-300 border-gray-700 h-[10rem] grid grid-cols-2 md:grid-cols-12 justify-center items-center">
                <div
                    className="col-span-1 border-r items-center justify-center h-full border-gray-700 hidden md:flex"></div>
                <div
                    className="col-span-2 md:col-span-4 font-[family-name:var(--font-archivo)] text-gray-300 font-semibold text-[8vw] md:text-[3.5vw] border-r flex items-center justify-center md:px-5 h-full border-gray-700">
                    <p className="md:w-[100%] w-[90%] border-gray-700 flex items-center justify-center md:border-x-0 border-x h-[100%]">{data.name}</p>
                </div>
                <div
                    className="col-span-1 md:col-span-2 border-r items-center justify-center h-full border-gray-700 hidden md:flex"></div>

                <div
                    className="col-span-2 border-r items-center justify-center h-full border-gray-700 hidden md:flex"></div>
                <div
                    className="col-span-2 md:col-span-2 grids border-r md:border-t-0 border-t flex items-center justify-center h-full border-gray-700">
                    <div
                        className="md:w-full w-[90%] md:border-x-0 border-x bg-black md:h-fit h-[100%] md:py-5 md:px-0 px-9 hover:bg-gray-300 hover:text-slate-900 transition-all hover:gap-6 hover:scale-105 border-y gap-2 md:gap-5 flex items-center justify-center border-gray-700 text-[4vw] md:text-base">
                        Visit Website <ArrowUpRight size={20}/>
                    </div>
                </div>
            </div>

            <div
                className="w-full border-b text-gray-300 border-gray-700 h-auto md:h-[7rem] grid grid-cols-2 md:grid-cols-12 justify-center items-center">
                <div
                    className="col-span-1 border-r items-center justify-center h-full border-gray-700 hidden md:flex grids"></div>

                <div
                    className="col-span-2 md:col-span-4 px-5 border-r md:border-b-0 border-b flex flex-col items-start md:justify-around justify-center  gap-5 md:py-0 py-3 h-full border-gray-700">
                    <h1 className="text-[4vw] md:text-[2.3vw] lg:text-[1.5vw] text-gray-600">Technology</h1>
                    <p className="text-[3.5vw] md:text-[1.2vw] text-gray-400">{data.tech}</p>
                </div>

                <div
                    className="col-span-1 md:col-span-2 px-5 border-r md:border-b-0 border-b flex flex-col items-start md:justify-around justify-center  gap-5 md:py-0 py-3 h-full border-gray-700">
                    <h1 className="text-[4vw] md:text-[2.3vw] lg:text-[1.5vw] text-gray-600">Type</h1>
                    <p className="text-[3.5vw] md:text-[1.2vw] text-gray-400">{data.type}</p>
                </div>

                <div
                    className="col-span-1 md:col-span-2 px-5 border-r md:border-b-0 border-b flex flex-col items-start md:justify-around justify-center  gap-5 md:py-0 py-3 h-full border-gray-700">
                    <h1 className="text-[4vw] md:text-[2.3vw] lg:text-[1.5vw] text-gray-600">Duration</h1>
                    <p className="text-[3.5vw] md:text-[1.2vw] text-gray-400">{data.duration}</p>
                </div>

                <div
                    className="col-span-1 md:col-span-2 px-5 border-r flex flex-col items-start md:justify-around justify-center  gap-5 md:py-0 py-3 h-full border-gray-700">
                    <h1 className="text-[4vw] md:text-[2.3vw] lg:text-[1.5vw] text-gray-600">Date</h1>
                    <p className="text-[3.5vw] md:text-[1.2vw] text-gray-400">{data.date}</p>
                </div>

                <div
                    className="col-span-1 border-r  items-center justify-center h-full border-gray-700 hidden md:flex grids"></div>
            </div>

            <Pic content={data.content}/>
        </div>
    );
};

export default Project;
