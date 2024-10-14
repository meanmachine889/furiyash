import { BoxReveal } from "./ui/BoxReveal";

const Hero2 = () => {

  return (
      <div className="flex w-[90%] border-x border-gray-700 min-h-[100vh] flex-col lg:flex-row items-center justify-center   gap-12 lg:gap-24 px-6 lg:px-12 py-12 lg:py-0 bg-black">
        {/* Left Section */}
        <div className="flex flex-col text-gray-300 justify-end h-[100%] items-center gap-6 w-full">
          <div className="flex flex-col gap-3 leading-tight justify-center items-center">
            <BoxReveal boxColor={"0b0b0b"} duration={0.5}>
              <p className="font-[family-name:var(--font-clash-semi)] lg:text-[6vw] md:text-[7vw] text-[9vw]">
                Yash Bharadwaj
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"0b0b0b"} duration={0.5}>
              <p className="font-[family-name:var(--font-clash-semi)] lg:text-[4vw] text-gray-500 md:text-[7vw] text-[9vw]">
                Web Developer
              </p>
            </BoxReveal>
          </div>

          <BoxReveal boxColor={"0b0b0b"} duration={1}>
            <div
                className="border-gray-300 font-[family-name:var(--font-geist-mono)] mt-5 px-5 py-3 rounded-full text-gray-300 border-2 md:px-7 md:py-5 lg:text-[1.2vw] text-[3vw] flex items-center justify-between w-[100%] md:w-[70%] lg:w-auto gap-5">
              Say hi!
            </div>
          </BoxReveal>

          {/*<div className="flex justify-center w-full lg:bottom-12">*/}
          {/*  <div className="border border-gray-700 p-3 rounded-full">*/}
          {/*    <ArrowDown/>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
  );
};

export default Hero2;
