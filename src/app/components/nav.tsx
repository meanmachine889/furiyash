import React from "react";

const Nav = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <nav className="w-[100%] border-b border-gray-700 h-[4vw] bg-black text-gray-300 hidden justify-between gap-[6rem] px-9 items-center m-0">
      <div className="font-[family-name:var(--font-archivo-bold)] md:text-2xl md:block hidden">
        Yash
      </div>
      <div
        className="h-[100%] flex-1 border-x border-gray-700 md:block hidden grids"
      ></div>
      <div className="flex items-end h-[100%] justify-end gap-[5%]">
        <div className="md:px-5 px-3 md:py-0 py-2  h-[100%] border-gray-700 flex items-center justify-center">
          <p className="font-[family-name:var(--font-geist-mono)] flex md:text-xl text-[3vw] items-end gap-3">
            Projects <span className="md:text-sm text-[1.7vw]">(01)</span>
          </p>
        </div>
        <div className="md:px-5 px-3 md:py-0 py-2 border-x h-[100%] border-gray-700 text-gray-300 flex items-center justify-center">
          <p
            className="font-[family-name:var(--font-geist-mono)] flex md:text-xl text-[3vw] items-end gap-3 cursor-pointer"
            onClick={toggleSidebar}
          >
            Skills <span className="md:text-sm text-[1.7vw]">(02)</span>
          </p>
        </div>
        <div className="md:px-5 px-3 md:py-0 py-2 h-[100%] border-gray-700 flex items-center justify-center">
          <p className="font-[family-name:var(--font-geist-mono)] flex md:text-xl text-[3vw] items-end gap-3">
            Experience <span className="md:text-sm text-[1.7vw]">(03)</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
