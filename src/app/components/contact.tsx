import React from "react";
import {BoxReveal} from "@/app/components/ui/BoxReveal";
import {ArrowRight, ArrowUpRight} from "lucide-react";

export function Contact() {
    return (
        <div className={"w-[100%] border-b border-gray-700 flex items-center flex-col"}>
            <div
                className="w-[100%] border-b text-gray-300 font-[family-name:var(--font-geist-mono)] text-[3vw] md:text-[1vw] border-gray-700 h-[2rem] md:h-[4rem] flex justify-center items-center">
                <div className=" w-[5%] border-r flex items-center justify-center h-[100%] border-gray-700"></div>
                <div className={"w-[30%] h-[100%] border-x border-gray-700"}></div>
                <div className={"w-[30%] h-[100%] border-x border-gray-700"}></div>
                <div className={"w-[30%] h-[100%] border-x border-gray-700"}></div>
                <div className=" w-[5%] border-l flex items-center justify-center h-[100%] border-gray-700"></div>
            </div>
            <div
                className="w-[90%] text-gray-300 font-[family-name:var(--font-clash-semi)] text-[3vw] min-h-fit h-[23vw] md:h-[15vw] lg:h-[12vw] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 border-gray-700 border">

                <div className="col-span-1 pt-9 h-full min-h-fit border-x border-gray-700 flex items-end justify-end">
                    <div className="max-h-[85%] min-h-fit w-full border-b px-3 md:py-0 py-9 border-gray-700">
                        <p className="text-[4vw] md:text-[2vw] lg:text-[1.9vw] text-gray-500 text-left transition-all cursor-pointer">
                            Let’s collab<br/> & <br/>cook something together!
                        </p>
                    </div>
                </div>

                <div
                    className="col-span-1 pt-9 min-h-[100%] px-3 flex md:border-y-0 border-y items-end justify-start py-3 border-x border-gray-700">
                    <BoxReveal boxColor={"#0b0b0b"} duration={1}>
                        <div
                            className="border-gray-700 font-[family-name:var(--font-geist-mono)] mt-5 px-5 py-2 rounded-full text-gray-400 border-2 md:px-7 md:py-5 text-[4vw] md:text-[2vw] lg:text-[1.5vw] flex items-center justify-between w-full md:w-[70%] lg:w-auto gap-5">
                            email
                            <ArrowRight/>
                        </div>
                    </BoxReveal>
                </div>

                <div className="col-span-1 pt-9 h-full border-x md:border-t-0 border-t border-gray-700 flex items-start justify-end">
                    <div className="max-h-[85%] px-3 py-3 border-gray-700 w-full flex flex-col gap-3">
                        <p className="text-[4vw] flex gap-5 items-center underline underline-offset-2 md:text-[2vw] lg:text-[1.5vw] text-gray-400 text-left transition-all cursor-pointer">
                            LinkedIn
                            <ArrowUpRight size={24}/>
                        </p>
                        <p className="text-[4vw] flex gap-5 items-center underline underline-offset-2 md:text-[2vw] lg:text-[1.5vw] text-gray-400 text-left transition-all cursor-pointer">
                            GitHub
                            <ArrowUpRight size={24}/>
                        </p>
                        <p className="text-[4vw] flex gap-5 items-center underline underline-offset-2 md:text-[2vw] lg:text-[1.5vw] text-gray-400 text-left transition-all cursor-pointer">
                            Instagram
                            <ArrowUpRight size={24}/>
                        </p>
                        <p className="text-[4vw] flex gap-5 items-center underline underline-offset-2 md:text-[2vw] lg:text-[1.5vw] text-gray-400 text-left transition-all cursor-pointer">
                            LeetCode
                            <ArrowUpRight size={24}/>
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="w-[100%] border-t text-gray-300 font-[family-name:var(--font-geist-mono)] text-[3vw] md:text-[1vw] border-gray-700 h-[2rem] md:h-[4rem] flex justify-center items-center">
                <div className=" w-[5%] border-r flex items-center justify-center h-[100%] border-gray-700"></div>
                <div className={"w-[30%] h-[100%] border-x border-gray-700"}></div>
                <div className={"w-[30%] h-[100%] border-x border-gray-700"}></div>
                <div className={"w-[30%] h-[100%] border-x border-gray-700"}></div>
                <div className=" w-[5%] border-l flex items-center justify-center h-[100%] border-gray-700"></div>
            </div>
        </div>
    )
}