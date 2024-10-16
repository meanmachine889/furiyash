import {ArrowUpRight} from "lucide-react";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

const experience = [
    {
        date: "May-Current",
        duration: "5 months",
        company: "Eventory",
        role: "Fullstack Developer",
        stack: "NextJs Nodejs Express AWS",
        href: "https://eventory.in/"
    },
    {
        date: "Jul-Current",
        duration: "3 months",
        company: "M#",
        role: "Fullstack Developer",
        stack: "NextJs Nodejs Express AWS",
        href: "https://hackathon.manipal.edu"
    },
    {
        date: "May-Aug 2024",
        duration: "4 months",
        company: "Horse's Mouth",
        role: "Fullstack Developer",
        stack: "NextJs AWS Jotai",
        href: "https://www.horsesmouth.in/"
    },
    {
        date: "Jul-Current",
        duration: "2 months",
        company: "MTTN",
        role: "Dev Head",
        stack: "NextJs AWS",
        href: "https://www.manipalthetalk.org/"
    },
];

const Experience = () => {
    const createRefInView = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const ref = useRef(null);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const isInView = useInView(ref, { once: true });
        return { ref, isInView };
    };

    return (
        <div className="flex flex-col items-center grids justify-center w-full">
            <div className="w-[90%] bg-black border-x border-gray-700 flex font-[family-name:var(--font-geist-mono)] flex-col">
                {experience.map((exp, index) => {
                    const companyRef = createRefInView();
                    const roleRef = createRefInView();
                    const dateRef = createRefInView();
                    const durationRef = createRefInView();

                    return (
                        <div
                            key={index}
                            className="flex md:flex-row justify-between md:h-[12vw] h-auto md:px-9 px-3 items-center border-b border-gray-700 py-5 w-full transition-all"
                        >
                            <div
                                className="w-full md:w-[95%] flex justify-between flex-col md:flex-row items-start md:items-center text-left"
                            >
                                <div className="flex flex-col w-full md:w-[65%] gap-2 md:gap-5">
                                    <p
                                        ref={companyRef.ref}
                                        className="text-gray-300 text-[6vw] md:text-[2vw] font-[family-name:var(--font-archivo)]"
                                        style={{
                                            transform: companyRef.isInView ? "none" : "translateY(10px)",
                                            opacity: companyRef.isInView ? 1 : 0,
                                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                                        }}
                                    >
                                        {exp.company}
                                    </p>
                                    <p
                                        ref={roleRef.ref}
                                        className="text-gray-400 text-[4.5vw] md:text-[1.4vw]"
                                        style={{
                                            transform: roleRef.isInView ? "none" : "translateY(10px)",
                                            opacity: roleRef.isInView ? 1 : 0,
                                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                                        }}
                                    >
                                        <span className="text-gray-400 text-[4.5vw] md:text-[1.3vw]">
                                            {exp.role} /{" "}
                                        </span>
                                        {exp.stack}
                                    </p>
                                </div>

                                <div className="flex flex-col w-full md:w-[30%] md:gap-5 mt-3 md:mt-0 md:mb-2">
                                    <p
                                        ref={dateRef.ref}
                                        className="text-gray-300 text-[5vw] md:text-[1.3vw]"
                                        style={{
                                            transform: dateRef.isInView ? "none" : "translateY(10px)",
                                            opacity: dateRef.isInView ? 1 : 0,
                                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                                        }}
                                    >
                                        {exp.date}
                                    </p>
                                    <p
                                        ref={durationRef.ref}
                                        className="text-gray-500 text-[4.5vw] md:text-[1.3vw]"
                                        style={{
                                            transform: durationRef.isInView ? "none" : "translateY(10px)",
                                            opacity: durationRef.isInView ? 1 : 0,
                                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                                        }}
                                    >
                                        {exp.duration}
                                    </p>
                                </div>
                            </div>

                            <Link
                                href={exp.href}
                                target={"_blank"}
                                className="self-end md:self-center mt-3 md:mt-0 text-slate-300 rounded-full flex items-center justify-center"
                            >
                                <ArrowUpRight className="h-[9vw] w-[9vw] md:h-[1.7vw] md:w-[1.7vw]" />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;
