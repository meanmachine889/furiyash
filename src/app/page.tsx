"use client";
import Hero2 from "./components/hero2";
import Nav from "./components/nav";
import { useState } from "react";
import NavHero from "./components/navHero";
import Mhash from "./components/projects/Mhash";
import Clarity from "./components/projects/Clarity";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1); // Default selected option is 1

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-screen flex flex-col justify-start items-center">
      <Nav toggleSidebar={toggleSidebar} />
      <Hero2 />
      <NavHero selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      {selectedOption === 2 ? <Mhash /> : <Clarity />}
    </div>
  );
}
