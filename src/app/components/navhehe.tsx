import React from "react";


const options = ["Projects", "Skills", "Experience"];

interface NavProps {
    setSelectedIndex: (index: number) => void;
    selectedIndex: number;
}

const NavHero = ({setSelectedIndex, selectedIndex} : NavProps) => {
    return (
        <>
            <div
                className="w-[100%] border-y text-gray-300 font-[family-name:var(--font-archivo)] text-[3vw] md:text-[1.5vw] border-gray-700 h-[2rem] md:h-[4rem] flex justify-center items-center">
                <div
                    className=" w-[5%] grids border-r flex items-center justify-center h-[100%] border-gray-700"></div>

                {options.map((option, index) => (
                    <button
                        key={option}
                        onClick={() => setSelectedIndex(index+1)}
                        className={`flex-1 border-r flex items-center justify-center h-[100%] border-gray-700 transition-all hover:bg-gray-300 md:hover:text-[1.6vw] hover:text-[3.1vw] hover:text-slate-900 ${(selectedIndex-1) === index ? "bg-gray-300 text-slate-900" : ""}`}
                    >
                        <p className={"transition-all"}>{option}</p>
                    </button>
                ))}

                <div
                    className=" w-[5%] grids border-r flex items-center justify-center h-[100%] border-gray-700"></div>
            </div>
            <div
                className="w-[100%] border-y text-gray-300 font-[family-name:var(--font-geist-mono)] text-[3vw] md:text-[1vw] border-gray-700 h-[2rem] md:h-[4rem] flex justify-center items-center">
                <div className=" w-[5%] border-r flex items-center justify-center h-[100%] border-gray-700"></div>
                <div className={"w-[30%] h-[100%] border-x border-gray-700"}></div>
                <div className={"w-[30%] h-[100%] border-x border-gray-700"}></div>
                <div className={"w-[30%] h-[100%] border-x border-gray-700"}></div>
                <div className=" w-[5%] border-l flex items-center justify-center h-[100%] border-gray-700"></div>
            </div>
        </>
    );
};

export default NavHero;
