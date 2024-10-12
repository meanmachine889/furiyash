import React from "react";

interface NavHeroProps {
    selectedOption: number;
    setSelectedOption: (option: number) => void;
}

const options = [1, 2, 3, 4, 5];


const NavHero = ({selectedOption, setSelectedOption}: NavHeroProps) => {
    return (
        <div
            className="w-[100%] border-y text-gray-300 font-[family-name:var(--font-geist-mono)] text-[3vw] md:text-[1vw] border-gray-700 h-[2rem] md:h-[4rem] flex justify-center items-center">
            <div
                className="md:w-[8.3%] w-[5%] border-r flex items-center justify-center h-[100%] border-gray-700 grids"></div>

            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => setSelectedOption(option)}
                    className={`flex-1 border-r flex items-center justify-center h-[100%] border-gray-700 transition-all hover:bg-white hover:text-slate-900 ${
                        selectedOption === option ? "bg-white text-slate-900" : ""
                    }`}
                >
                    (0{option})
                </button>
            ))}

            <div
                className="md:w-[8.3%] w-[5%] border-r flex items-center justify-center h-[100%] border-gray-700 grids"></div>
        </div>
    );
};

export default NavHero;
