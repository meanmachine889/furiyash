import React from "react";

interface NavHeroProps {
  selectedOption: number;
  setSelectedOption: (option: number) => void;
}

const NavHero = ({ selectedOption, setSelectedOption }: NavHeroProps) => {
  return (
    <div className="w-[100%] border-y text-gray-300 font-[family-name:var(--font-geist-mono)] text-[1.1vw] border-gray-700 h-[1rem] md:h-[4rem] flex justify-center items-center">
      <div className="md:w-[8.3%] w-[5%] border-r flex items-center justify-center h-[100%] border-gray-700 grids"></div>

      <button
        onClick={() => setSelectedOption(1)}
        className={`flex-1 border-r flex items-center justify-center h-[100%] border-gray-700 ${
          selectedOption === 1 ? "bg-white text-slate-900" : ""
        }`}
      >
        (01)
      </button>
      <button
        onClick={() => setSelectedOption(2)}
        className={`flex-1 border-r flex items-center justify-center h-[100%] border-gray-700 ${
          selectedOption === 2 ? "bg-white text-slate-900" : ""
        }`}
      >
        (02)
      </button>
      <button
        onClick={() => setSelectedOption(3)}
        className={`flex-1 border-r flex items-center justify-center h-[100%] border-gray-700 ${
          selectedOption === 3 ? "bg-white text-slate-900" : ""
        }`}
      >
        (03)
      </button>
      <button
        onClick={() => setSelectedOption(4)}
        className={`flex-1 border-r flex items-center justify-center h-[100%] border-gray-700 ${
          selectedOption === 4 ? "bg-white text-slate-900" : ""
        }`}
      >
        (04)
      </button>
      <button
        onClick={() => setSelectedOption(5)}
        className={`flex-1 border-r flex items-center justify-center h-[100%] border-gray-700 ${
          selectedOption === 5 ? "bg-white text-slate-900" : ""
        }`}
      >
        (05)
      </button>
      <div className="md:w-[8.3%] w-[5%] border-r flex items-center justify-center h-[100%] border-gray-700 grids"></div>
    </div>
  );
};

export default NavHero;
