import { ArrowRight } from "lucide-react";
import React from "react";
import { BoxReveal } from "./ui/BoxReveal";

const Hero2 = () => {
  return (
    <>
      <div className="flex w-[100%] gap-9 text-gray-300 flex-col bg-black h-fit min-w-screen justify-center items-center">
        <div className="flex flex-col gap-3 border-x border-gray-700 text-gray-300 bg-black h-[92vh] w-[90%] px-9 justify-center items-start">
          <div className="flex flex-col max-h-fit leading-tight">
            <BoxReveal boxColor={"0b0b0b"} duration={0.5}>
              <p className="font-[family-name:var(--font-clash-semi)] lg:text-[4vw] md:text-[7vw] text-[9vw] ">
                YASH BHARADWAJ
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"0b0b0b"} duration={0.5}>
              <p className="font-[family-name:var(--font-clash-semi)] lg:text-[3.5vw] md:text-[7vw] text-[9vw] ">
                WEB DEVELOPER
              </p>
            </BoxReveal>
          </div>
          <BoxReveal boxColor={"0b0b0b"} duration={1}>
            <p className="font-[family-name:var(--font-archivo)] lg:text-[1.5vw] md:w-[60%] md:text-[7vw] text-[5vw] ">
              I help startups & organizations build seamless, impactful &
              user-friendly websites.
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"0b0b0b"} duration={1}>
            <div className="border-gray-300 font-[family-name:var(--font-geist-mono)] mt-5 px-3 py-2 rounded-full text-gray-300 border-2 md:px-7 md:py-5 md:text-[1.2vw] text-[3vw] gap-5 flex items-center justify-center">
              yashbharadwaj131@gmail.com
              <ArrowRight />
            </div>
          </BoxReveal>
        </div>
      </div>
      {/* <RetroGrid /> */}
    </>
  );
};

export default Hero2;
