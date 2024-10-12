"use client";
import Hero2 from "./components/hero2";
import Nav from "./components/nav";
import {useState} from "react";
import NavHero from "./components/navHero";
import Project from "./components/projects/Project";
import landing1 from "../app/public/images/mhashlanding.png";
import clarityImage from "../app/public/images/Component2.png";
import connectImage from "../app/public/images/connectlanding.png";
import leetImage from "../app/public/images/leetlanding.png";
import vibezImage from "../app/public/images/vibezlanding.png";
import Experience from "@/app/components/experience";


const projectContent = [
    {
        name: "M#",
        tech: "NextJs / NodeJs / Express / AWS",
        type: "Production",
        duration: "2 months",
        date: "Jul-Oct 2024",
        content: [
            {
                src: landing1, // imported image
                alt: "Clarity",
                text: "A platform for our college hackathon, bringing together more than 2,000 students from over 500 colleges nationwide to compete.",
            },
        ]
    },
    {
        name: "Clarity",
        tech: "NextJs / Gemini / SQL / Pinecone",
        type: "Personal",
        duration: "1 month",
        date: "Jun 2024",
        content: [
            {
                src: clarityImage, // imported image
                alt: "Clarity",
                text: "Upload your pdfs and chat with them",
            },
        ]
    },
    {
        name: "ConnectZ",
        tech: "NextJs / NodeJs / Express / AWS",
        type: "Personal",
        duration: "2 months",
        date: "May 2024",
        content: [
            {
                src: connectImage, // imported image
                alt: "connectz",
                text: "A real-time chatting platform.",
            },
        ]
    },
    {
        name: "LeetCoach",
        tech: "NextJs / Gemini / Docker / SQL",
        type: "Personal",
        duration: "2 weeks",
        date: "Sept 2024",
        content: [
            {
                src: leetImage, // imported image
                alt: "leetcoach",
                text: "A coding platform with a user dashboard, offering AI-integrated personalized hints and code analysis to enhance learning and problem-solving skills.",
            },
        ]
    },
    {
        name: "VibeZ",
        tech: "NextJs / NodeJs / Express / AWS",
        type: "Personal",
        duration: "2 weeks",
        date: "Apr 2024",
        content: [
            {
                src: vibezImage, // imported image
                alt: "vibez",
                text: "Event Management Platform",
            },
        ]
    }
];



export default function Home() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(1); // Default selected option is 1

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="w-screen flex flex-col justify-start items-center">
            <Nav toggleSidebar={toggleSidebar}/>
            <Hero2/>
            <NavHero selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
            <Project data={projectContent[selectedOption-1]}/>
            <Experience />
        </div>
    );
}
