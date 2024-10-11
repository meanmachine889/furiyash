import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <div
      className={`h-[90vh] py-5 border-l-2 border-gray-500 bottom-0 overflow-hidden overflow-y-hidden fixed w-[32%]  transform flex flex-col transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } right-0 overflow-y-auto`}
    >
      <div className="flex-col w-full font-[family-name:var(--font-geist-mono)] flex items-start mt-9">
        {/* Sidebar toggle button */}
        <button
          onClick={toggleSidebar}
          className="text-gray-500 mb-9 border-2 mx-3 border-gray-500 rounded-full p-2 self-end hover:bg-gray-600 transition"
        >
           <ArrowRight />
        </button>

        {/* Projects Title */}
        <div className="border-y py-7 border-gray-500 w-full p-3 flex items-center justify-end">
          <h1 className="font-[family-name:var(--font-clash-semi)] text-3xl text-white">
            Projects
          </h1>
        </div>

        {/* Project List */}
        {[
          { name: "M#", links: ["visit", "view"] },
          { name: "Clarity", links: ["visit", "github", "view"] },
          { name: "LeetCoach", links: ["github", "view"] },
          { name: "ConnectZ", links: ["visit", "github", "view"] },
          { name: "MTTN", links: ["visit", "view"] },
          { name: "VibeZ", links: ["github", "view"] },
        ].map((project, idx) => (
          <div
            key={idx}
            className="border-b py-5 border-gray-500 w-full flex items-center justify-between px-3 text-xl text-gray-300  transition"
          >
            <p className="">{project.name}</p>
            <div className="flex gap-5 text-lg">
              {project.links.includes("visit") && (
                <a href="#" className="hover:text-white flex items-center gap-1 transition">
                  visit
                  <ArrowUpRight size={16} />
                </a>
              )}
              {project.links.includes("github") && (
                <a href="#" className="hover:text-white flex items-center gap-1 transition">
                  github
                  <ArrowUpRight size={16} />
                </a>
              )}
              {project.links.includes("view") && (
                <a href="#" className="hover:text-white transition">
                  view
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
