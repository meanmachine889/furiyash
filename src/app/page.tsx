"use client";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <Hero />
      <Skills />
      <Projects/>
      <Experience />
    </div>
  );
}
